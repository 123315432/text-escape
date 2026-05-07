import type { ClueCondition, ClueId, ClueSet, GameNode } from './types'

function hasSceneMatch(node: GameNode, clues: ClueSet): boolean {
  if (!node.scenes || node.scenes.length === 0) {
    return true
  }
  return node.scenes.some((scene) => clues.has(scene))
}

export function evaluateCondition(cond: ClueCondition | undefined, clues: ClueSet): boolean {
  if (!cond) {
    return true
  }

  if (typeof cond === 'string') {
    if (cond.startsWith('!')) {
      return !clues.has(cond.slice(1))
    }
    return clues.has(cond)
  }

  const [mode, ...rest] = cond
  if (mode === 'AND') {
    return rest.every((entry) => evaluateCondition(entry, clues))
  }
  return rest.some((entry) => evaluateCondition(entry, clues))
}

export function applyClues(current: ClueSet, toAdd: ClueId[]): ClueSet {
  const next = new Set(current)

  for (const clue of toAdd) {
    if (clue.startsWith('-')) {
      next.delete(clue.slice(1))
      continue
    }

    if (clue.startsWith('*')) {
      for (const existing of Array.from(next)) {
        if (existing.startsWith('*')) {
          next.delete(existing)
        }
      }
      next.add(clue)
      continue
    }

    next.add(clue)
  }

  return next
}

export function isNodeVisible(node: GameNode, clues: ClueSet): boolean {
  return evaluateCondition(node.preClue, clues) && hasSceneMatch(node, clues)
}
