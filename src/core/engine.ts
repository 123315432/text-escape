import { applyClues, evaluateCondition, isNodeVisible } from './clue-eval'
import type {
  ClueId,
  EndingDefinition,
  EndingId,
  GameAction,
  GameNode,
  EndingState,
  GameStateV2,
  Mission,
  Trigger,
} from './types'

const DEFAULT_ENDINGS: Record<EndingId, EndingDefinition> = {
  normal: {
    title: '逃脱成功',
    body: '你最终让出口解锁，离开了这处困住你的空间，但仍有些细节被留在了身后。',
  },
  perfect: {
    title: '完美逃脱',
    body: '你补齐了所有关键线索，连这处空间背后的因果也一并理顺，然后安然离开。',
  },
  timeout: {
    title: '超时结局',
    body: '时间耗尽时，机关与出口一同复位。你没能在一切重新闭合前走出去。',
  },
}

function cloneState(state: GameStateV2): GameStateV2 {
  return {
    ...state,
    clues: new Set(state.clues),
    end: state.end ? { ...state.end } : null,
  }
}

function applyAndResolve(state: GameStateV2, cluesToAdd: ClueId[], mission: Mission): GameStateV2 {
  let next = cloneState(state)
  next.clues = applyClues(next.clues, cluesToAdd)
  next = runTriggers(next, mission)
  next = resolveEnding(next, mission)
  return next
}

function runTriggers(state: GameStateV2, mission: Mission): GameStateV2 {
  let next = state
  let changed = true

  while (changed) {
    changed = false
    for (const trigger of mission.triggers) {
      if (shouldApplyTrigger(trigger, next.clues)) {
        const updated = applyClues(next.clues, trigger.addClues)
        if (!sameClues(updated, next.clues)) {
          next = { ...next, clues: updated }
          changed = true
        }
      }
    }
  }

  return next
}

function shouldApplyTrigger(trigger: Trigger, clues: Set<string>): boolean {
  if (!evaluateCondition(trigger.when, clues)) {
    return false
  }
  return trigger.addClues.some((clue) => {
    if (clue.startsWith('-')) {
      return clues.has(clue.slice(1))
    }
    return !clues.has(clue)
  })
}

function sameClues(a: Set<string>, b: Set<string>): boolean {
  if (a.size !== b.size) {
    return false
  }
  for (const value of a) {
    if (!b.has(value)) {
      return false
    }
  }
  return true
}

function getEndingDefinition(mission: Mission, id: EndingId): EndingDefinition {
  return {
    ...DEFAULT_ENDINGS[id],
    ...mission.endings?.[id],
  }
}

export function getEndingState(mission: Mission, id: EndingId): EndingState {
  return {
    id,
    ...getEndingDefinition(mission, id),
  }
}

function resolveEnding(state: GameStateV2, mission: Mission): GameStateV2 {
  if (state.clues.has('@perfect_ending')) {
    return {
      ...state,
      end: getEndingState(mission, 'perfect'),
    }
  }

  if (state.clues.has('@normal_ending')) {
    return {
      ...state,
      end: getEndingState(mission, 'normal'),
    }
  }

  if (state.clues.has('@timeout_ending')) {
    return {
      ...state,
      end: getEndingState(mission, 'timeout'),
    }
  }

  return {
    ...state,
    end: null,
  }
}

function isCompleted(node: GameNode, clues: Set<string>): boolean {
  return Boolean(node.doneClue) && evaluateCondition(node.doneClue, clues)
}

function canUseNode(node: GameNode, clues: Set<string>): boolean {
  return isNodeVisible(node, clues) && !isCompleted(node, clues)
}

function handleInteract(state: GameStateV2, node: GameNode, interactIndex: number, mission: Mission): GameStateV2 {
  const interaction = node.interactions?.[interactIndex]
  if (!interaction || !canUseNode(node, state.clues)) {
    return state
  }
  if (!evaluateCondition(interaction.when, state.clues)) {
    return state
  }
  return applyAndResolve(state, interaction.addClues ?? [], mission)
}

function handlePassword(state: GameStateV2, node: GameNode, value: string, mission: Mission): GameStateV2 {
  if (node.type !== 'password' || !canUseNode(node, state.clues) || !node.code) {
    return state
  }
  if (value.trim() !== node.code) {
    return state
  }
  return applyAndResolve(state, node.successClues ?? [], mission)
}

function handleSort(state: GameStateV2, node: GameNode, order: number[], mission: Mission): GameStateV2 {
  const solution = node.sortSolution
  if (node.type !== 'click-sort' || !canUseNode(node, state.clues) || !solution) {
    return state
  }
  const matched = order.length === solution.length && order.every((value, index) => value === solution[index])
  if (!matched) {
    return state
  }
  return applyAndResolve(state, node.successClues ?? [], mission)
}

function handleUseItem(state: GameStateV2, source: GameNode, target: GameNode, mission: Mission): GameStateV2 {
  if (source.type !== 'item' || !canUseNode(source, state.clues) || !isNodeVisible(target, state.clues)) {
    return state
  }

  const use = source.itemUse
  if (!use || !use.targetIds.includes(target.id) || !evaluateCondition(use.when, state.clues)) {
    return state
  }

  return applyAndResolve(state, use.addClues, mission)
}

function handleCombine(state: GameStateV2, a: GameNode, b: GameNode, mission: Mission): GameStateV2 {
  if (a.type !== 'item' || b.type !== 'item') {
    return state
  }
  if (!canUseNode(a, state.clues) || !canUseNode(b, state.clues)) {
    return state
  }

  const fromA = a.combineWith?.find((entry) => entry.targetId === b.id && evaluateCondition(entry.when, state.clues))
  if (fromA) {
    return applyAndResolve(state, fromA.addClues, mission)
  }

  const fromB = b.combineWith?.find((entry) => entry.targetId === a.id && evaluateCondition(entry.when, state.clues))
  if (fromB) {
    return applyAndResolve(state, fromB.addClues, mission)
  }

  return state
}

export function createInitialState(mission: Mission): GameStateV2 {
  const now = Date.now()
  const base: GameStateV2 = {
    version: 2,
    missionId: mission.id,
    startedAt: now,
    deadlineAt: now + mission.timeLimitMs,
    clues: new Set(mission.initialClues),
    end: null,
  }
  return resolveEnding({
    ...base,
    clues: runTriggers(base, mission).clues,
  }, mission)
}

export function findNode(root: GameNode, id: string): GameNode | null {
  if (root.id === id) {
    return root
  }
  for (const child of root.children ?? []) {
    const found = findNode(child, id)
    if (found) {
      return found
    }
  }
  return null
}

export function reduceGame(state: GameStateV2, action: GameAction, mission: Mission): GameStateV2 {
  if (state.end && action.type !== 'RESTART') {
    return state
  }

  switch (action.type) {
    case 'RESTART':
      return createInitialState(mission)
    case 'TIMEOUT':
      return applyAndResolve(state, ['@timeout'], mission)
    case 'INTERACT': {
      const node = findNode(mission.root, action.nodeId)
      if (!node) {
        return state
      }
      return handleInteract(state, node, action.interactIndex, mission)
    }
    case 'PASSWORD_SUBMIT': {
      const node = findNode(mission.root, action.nodeId)
      if (!node) {
        return state
      }
      return handlePassword(state, node, action.value, mission)
    }
    case 'SORT_SUBMIT': {
      const node = findNode(mission.root, action.nodeId)
      if (!node) {
        return state
      }
      return handleSort(state, node, action.order, mission)
    }
    case 'USE_ITEM': {
      const source = findNode(mission.root, action.sourceId)
      const target = findNode(mission.root, action.targetId)
      if (!source || !target) {
        return state
      }
      return handleUseItem(state, source, target, mission)
    }
    case 'COMBINE': {
      const a = findNode(mission.root, action.aId)
      const b = findNode(mission.root, action.bId)
      if (!a || !b) {
        return state
      }
      return handleCombine(state, a, b, mission)
    }
    default:
      return state
  }
}
