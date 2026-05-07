import { evaluateCondition, isNodeVisible } from '../core/clue-eval'
import { findNode } from '../core/engine'
import { getLang } from '../core/lang'
import type { GameAction, GameNode, GameStateV2, Mission, NodeState, UiState } from '../core/types'
import { t } from './strings'

export interface AppController {
  dispatch: (action: GameAction) => GameStateV2
  mission: Mission
  state: GameStateV2
  ui: UiState
  setUi: (next: Partial<UiState>) => void
  goToSelect?: () => void
  prevClues?: Set<string>
  prevRenderedIds?: Set<string>
}

interface Point {
  x: number
  y: number
}

interface RenderNode {
  node: GameNode
  parentId: string | null
  position: Point
  state: NodeState
  isNew?: boolean
}

const ROOT_POINT = { x: 560, y: 330 }

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function getRemainingMs(state: GameStateV2): number {
  return Math.max(0, state.deadlineAt - Date.now())
}

function formatTimer(ms: number): string {
  const totalSeconds = Math.ceil(ms / 1000)
  const minutes = Math.max(0, Math.floor(totalSeconds / 60))
  const seconds = Math.max(0, totalSeconds % 60)
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}


function getActiveScene(clues: Set<string>): string | null {
  return Array.from(clues).find((clue) => clue.startsWith('*')) ?? null
}

function sceneMatches(node: GameNode, clues: Set<string>): boolean {
  if (!node.scenes || node.scenes.length === 0) {
    return true
  }
  return node.scenes.some((scene) => clues.has(scene))
}

function isCompleted(node: GameNode, clues: Set<string>): boolean {
  return Boolean(node.doneClue) && evaluateCondition(node.doneClue, clues)
}

function getNodeState(node: GameNode, clues: Set<string>, selectedNodeId: string | null): NodeState {
  const visible = isNodeVisible(node, clues)
  const locked = sceneMatches(node, clues) && !evaluateCondition(node.preClue, clues)
  const completed = isCompleted(node, clues)
  return {
    visible,
    locked,
    completed,
    active: selectedNodeId === node.id,
  }
}

function toPoint(origin: Point, direction: number, distance: number): Point {
  const radian = (direction * Math.PI) / 180
  return {
    x: origin.x + Math.cos(radian) * distance,
    y: origin.y + Math.sin(radian) * distance,
  }
}

function fallbackDirection(index: number, total: number): number {
  if (total <= 1) {
    return 0
  }
  return -120 + (240 / (total - 1)) * index
}

function getGraphChildren(node: GameNode, activeScene: string | null): GameNode[] {
  if (!node.children || node.children.length === 0) {
    return []
  }

  if (node.id === 'root') {
    return node.children.filter((child) => child.type !== 'backpack' && child.sceneClue === activeScene)
  }

  return node.children.filter((child) => child.type !== 'backpack' && (!child.scenes || child.scenes.includes(activeScene ?? '')))
}

function isInSubtree(node: GameNode, targetId: string | null): boolean {
  if (!targetId) return false
  return (node.children ?? []).some((child) => child.id === targetId || isInSubtree(child, targetId))
}

function collectGraphNodes(
  node: GameNode,
  activeScene: string | null,
  clues: Set<string>,
  selectedNodeId: string | null,
  computedPosition: Point,
  parentId: string | null,
  out: RenderNode[],
  nodePositions: Record<string, { x: number; y: number }>,
  prevClues?: Set<string>,
  prevRenderedIds?: Set<string>
): void {
  // User-dragged position overrides computed layout position
  const position = nodePositions[node.id] ?? computedPosition
  const state = getNodeState(node, clues, selectedNodeId)

  // Completely hide nodes whose preClue is unmet — don't recurse into children either
  if (!state.visible) return

  // isNew: wasn't rendered before (covers both new clues AND newly-expanded tree branches)
  const isNew = prevRenderedIds !== undefined
    ? !prevRenderedIds.has(node.id)
    : (prevClues !== undefined && !isNodeVisible(node, prevClues))
  out.push({ node, parentId, position, state, isNew })

  // Only expand children when this node is root, selected, or an ancestor of the selected node.
  // Works for any depth: click grandchild → all ancestors stay expanded; click root → collapses.
  const children = getGraphChildren(node, activeScene)
  const isAncestorOfSelected = isInSubtree(node, selectedNodeId)
  const shouldExpand = node.id === 'root' || node.id === selectedNodeId || isAncestorOfSelected
  if (!shouldExpand) return

  children.forEach((child, index) => {
    const direction = child.layout?.direction ?? fallbackDirection(index, children.length)
    const distance = child.layout?.distance ?? 130
    // Children positions are relative to the computed (layout) position, not the dragged one
    collectGraphNodes(child, activeScene, clues, selectedNodeId, toPoint(computedPosition, direction, distance), node.id, out, nodePositions, prevClues, prevRenderedIds)
  })
}

function collectItemNodes(
  mission: Mission,
  clues: Set<string>,
  selectedNodeId: string | null,
  nodePositions: Record<string, { x: number; y: number }>,
  out: RenderNode[],
  prevClues?: Set<string>,
  prevRenderedIds?: Set<string>
): void {
  const backpack = mission.root.children?.find((n) => n.type === 'backpack')
  if (!backpack) return

  const visible = (backpack.children ?? []).filter((n) => isNodeVisible(n, clues))
  visible.forEach((item, index) => {
    const spread = (visible.length - 1) * 140
    const defaultX = ROOT_POINT.x - spread / 2 + index * 140
    const defaultY = ROOT_POINT.y + 260
    const position = nodePositions[item.id] ?? { x: defaultX, y: defaultY }
    const isNew = prevRenderedIds !== undefined
      ? !prevRenderedIds.has(item.id)
      : (prevClues !== undefined && !isNodeVisible(item, prevClues))
    out.push({ node: item, parentId: null, position, state: getNodeState(item, clues, selectedNodeId), isNew })
  })
}

function getRenderedNodes(mission: Mission, state: GameStateV2, ui: UiState, prevClues?: Set<string>, prevRenderedIds?: Set<string>): RenderNode[] {
  const nodes: RenderNode[] = []
  collectGraphNodes(mission.root, getActiveScene(state.clues), state.clues, ui.selectedNodeId, ROOT_POINT, null, nodes, ui.nodePositions, prevClues, prevRenderedIds)
  collectItemNodes(mission, state.clues, ui.selectedNodeId, ui.nodePositions, nodes, prevClues, prevRenderedIds)
  return nodes
}

function findDropTarget(root: HTMLElement, draggedId: string, clientX: number, clientY: number): string | null {
  const allNodes = root.querySelectorAll<HTMLElement>('[data-node-drag]')
  for (const el of allNodes) {
    const targetId = el.dataset.nodeDrag
    if (!targetId || targetId === draggedId) continue
    const rect = el.getBoundingClientRect()
    if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
      return targetId
    }
  }
  return null
}

function isRenderableSelection(node: GameNode, _mission: Mission, state: GameStateV2): boolean {
  if (node.id === 'root' || node.type === 'backpack') {
    return true
  }
  if (node.type === 'item') {
    return isNodeVisible(node, state.clues)
  }
  if (node.scenes && node.sceneClue && state.clues.has(node.sceneClue)) {
    return true
  }
  return isNodeVisible(node, state.clues) || (sceneMatches(node, state.clues) && !evaluateCondition(node.preClue, state.clues))
}

function renderEdgeMap(nodes: RenderNode[]): string {
  const byId = new Map(nodes.map((entry) => [entry.node.id, entry]))
  return nodes
    .filter((entry) => entry.parentId)
    .map((entry) => {
      const parent = byId.get(entry.parentId ?? '')
      if (!parent) {
        return ''
      }
      const locked = entry.state.locked
      return `<line class="graph-edge ${locked ? 'is-locked' : ''}" data-edge-from="${parent.node.id}" data-edge-to="${entry.node.id}" x1="${parent.position.x}" y1="${parent.position.y}" x2="${entry.position.x}" y2="${entry.position.y}"></line>`
    })
    .join('')
}

function getNodeAcquiredClueTexts(node: GameNode, clues: Set<string>): string[] {
  // Show interaction.desc when that interaction has been completed (its addClues are in state)
  // This is the actual discovered information, not the toast flavor text
  return (node.interactions ?? [])
    .filter(
      (i) => i.desc && (i.addClues ?? []).some((c) => !c.startsWith('-') && clues.has(c)),
    )
    .map((i) => i.desc!)
}

function renderGraphNodes(nodes: RenderNode[], clues: Set<string>): string {
  return nodes
    .map((entry) => {
      const classes = ['graph-node', `type-${entry.node.type}`]
      if (entry.state.active) classes.push('is-active')
      if (entry.state.locked) classes.push('is-locked')
      if (entry.state.completed) classes.push('is-completed')
      if (entry.node.id === 'root') classes.push('is-root')

      const clueTexts = getNodeAcquiredClueTexts(entry.node, clues)
      const clueHtml = clueTexts
        .map((t) => `<span class="node-clue-tag">${escapeHtml(t)}</span>`)
        .join('')

      return `
        <button
          class="${classes.join(' ')}"
          data-node-drag="${entry.node.id}"
          ${entry.isNew ? 'data-new-node="true"' : ''}
          style="left:${entry.position.x}px;top:${entry.position.y}px"
          type="button"
        >
          <strong>${entry.node.title}</strong>
          ${clueHtml}
        </button>
      `
    })
    .join('')
}


function getSelectedNode(controller: AppController): GameNode {
  const selected = controller.ui.selectedNodeId ? findNode(controller.mission.root, controller.ui.selectedNodeId) : null
  if (selected && isRenderableSelection(selected, controller.mission, controller.state)) {
    return selected
  }
  return controller.mission.root
}

function renderActionButtons(controller: AppController, node: GameNode, state: NodeState): string {
  const lang = getLang()
  if (state.locked) {
    return `<div class="detail-note">${t('game.detail.locked', lang)}</div>`
  }

  if (node.type === 'item') {
    const actions: string[] = []
    if (node.itemUse) {
      for (const targetId of node.itemUse.targetIds) {
        const target = findNode(controller.mission.root, targetId)
        if (target && isNodeVisible(target, controller.state.clues) && evaluateCondition(node.itemUse.when, controller.state.clues)) {
          actions.push(
            `<button class="detail-action" data-item-use="${node.id}" data-target-id="${target.id}" type="button">${t('game.item.use', lang)} ${target.title}</button>`
          )
        }
      }
    }

    for (const relation of node.combineWith ?? []) {
      const target = findNode(controller.mission.root, relation.targetId)
      if (target && isNodeVisible(target, controller.state.clues) && evaluateCondition(relation.when, controller.state.clues)) {
        actions.push(
          `<button class="detail-action" data-item-combine="${node.id}" data-with-id="${target.id}" type="button">${t('game.item.combine', lang).replace('{target}', target.title)}</button>`
        )
      }
    }

    return actions.length ? `<div class="detail-actions">${actions.join('')}</div>` : `<div class="detail-note">${t('game.item.none', lang)}</div>`
  }

  if (node.type === 'password') {
    return state.completed
      ? `<div class="detail-note">${t('game.password.done', lang)}</div>`
      : `<div class="detail-actions"><button class="detail-action" data-open-password="true" data-node-id="${node.id}" type="button">${t('game.password.open', lang)}</button></div>`
  }

  if (node.type === 'click-sort') {
    return state.completed
      ? `<div class="detail-note">${t('game.sort.done', lang)}</div>`
      : `<div class="detail-actions"><button class="detail-action" data-open-sort="true" data-node-id="${node.id}" type="button">${t('game.sort.open', lang)}</button></div>`
  }

  const buttons = (node.interactions ?? [])
    .map((interaction, originalIndex) => ({ interaction, originalIndex }))
    .filter(({ interaction }) => !state.completed && evaluateCondition(interaction.when, controller.state.clues))
    .map(({ interaction, originalIndex }) => `
        <button class="detail-action" data-interact-node="${node.id}" data-interact-index="${originalIndex}" type="button">
          ${interaction.label}
        </button>
      `)
    .join('')

  return buttons ? `<div class="detail-actions">${buttons}</div>` : ''
}

function renderDetailPanel(controller: AppController): string {
  const node = getSelectedNode(controller)
  const nodeState = getNodeState(node, controller.state.clues, controller.ui.selectedNodeId)
  return `
    <section class="detail-panel ${nodeState.locked ? 'is-locked' : ''}">
      <p class="detail-title">${node.title}</p>
      <p class="detail-desc">${node.desc}</p>
      ${renderActionButtons(controller, node, nodeState)}
    </section>
  `
}

function renderPasswordModal(controller: AppController): string {
  const lang = getLang()
  if (!controller.ui.modal || controller.ui.modal.kind !== 'password') {
    return ''
  }

  const node = findNode(controller.mission.root, controller.ui.modal.nodeId)
  if (!node) {
    return ''
  }

  return `
    <div class="modal-mask" data-modal-close="true">
      <section class="modal-card ${controller.ui.modal.error ? 'is-shaking' : ''}" data-modal-card="true">
        <p class="modal-title">${node.title}</p>
        <p>${node.desc}</p>
        <form class="modal-form" data-password-form="${node.id}">
          <input class="modal-input" name="password" maxlength="8" placeholder="${t('game.password.ph', lang)}" value="${escapeHtml(controller.ui.modal.value)}" autofocus />
          <button class="detail-action" type="submit">${t('game.modal.submit', lang)}</button>
        </form>
        ${controller.ui.modal.error ? `<div class="modal-error">${controller.ui.modal.error}</div>` : ''}
      </section>
    </div>
  `
}

function renderSortModal(controller: AppController): string {
  const lang = getLang()
  if (!controller.ui.modal || controller.ui.modal.kind !== 'sort') {
    return ''
  }

  const node = findNode(controller.mission.root, controller.ui.modal.nodeId)
  if (!node || !node.sortSymbols) {
    return ''
  }

  const orderText = controller.ui.modal.order.map((index) => node.sortSymbols?.[index] ?? '').join(' → ') || t('game.sort.placeholder', lang)
  return `
    <div class="modal-mask" data-modal-close="true">
      <section class="modal-card ${controller.ui.modal.error ? 'is-shaking' : ''}" data-modal-card="true">
        <p class="modal-title">${node.title}</p>
        <div class="sort-track" data-sort-track="true">${orderText}</div>
        <div class="sort-grid">
          ${node.sortSymbols
            .map((symbol, index) => `<button class="detail-action" data-sort-pick="${index}" type="button">${symbol}</button>`)
            .join('')}
        </div>
        <div class="detail-actions">
          <button class="detail-action" data-sort-submit="${node.id}" type="button">${t('game.sort.submit', lang)}</button>
          <button class="detail-action ghost" data-sort-reset="true" type="button">${t('game.sort.reset', lang)}</button>
        </div>
        ${controller.ui.modal.error ? `<div class="modal-error">${controller.ui.modal.error}</div>` : ''}
      </section>
    </div>
  `
}

function renderClueBar(controller: AppController): string {
  if (controller.state.end) return ''
  if (controller.ui.selectedNodeId !== null) return ''
  const messages = controller.mission.clueMessages ?? {}
  // Follow definition order (keys in clueMessages object)
  const chips = Object.entries(messages)
    .filter(([clueId]) => controller.state.clues.has(clueId) && !clueId.startsWith('@'))
    .map(([clueId, msg]) => {
      const isScene = clueId.startsWith('*')
      return `<span class="clue-chip${isScene ? ' clue-chip-scene' : ''}">${escapeHtml(msg)}</span>`
    })
  if (chips.length === 0) return ''
  return `<div class="clue-bar">${chips.join('')}</div>`
}

function renderClueLog(controller: AppController): string {
  const lang = getLang()
  if (!controller.ui.modal || controller.ui.modal.kind !== 'clue-log') return ''
  const messages = controller.mission.clueMessages ?? {}
  const entries = Array.from(controller.state.clues)
    .filter((c) => messages[c] && !c.startsWith('*') && !c.startsWith('@'))
    .map((c) => messages[c])
  const body = entries.length === 0
    ? `<p class="clue-log-empty">${t('game.clue_log.empty', lang)}</p>`
    : entries.map((text) => `<div class="clue-log-entry">${escapeHtml(text)}</div>`).join('')
  return `
    <div class="modal-mask" data-modal-close="true">
      <section class="modal-card clue-log-card" data-modal-card="true">
        <p class="modal-title">${t('game.clue_log.title', lang)}</p>
        <p class="modal-kicker">${t('game.clue_log.count', lang).replace('{count}', String(entries.length))}</p>
        <div class="clue-log-list">${body}</div>
        <div class="detail-actions" style="margin-top:14px">
          <button class="detail-action ghost" data-modal-close="true" type="button">${t('game.modal.close_btn', lang)}</button>
        </div>
      </section>
    </div>
  `
}

function renderEnding(controller: AppController): string {
  const lang = getLang()
  if (!controller.state.end) {
    return ''
  }
  return `
    <div class="ending-mask">
      <section class="ending-card">
        <div class="modal-kicker">${t('game.ending.kicker', lang)}</div>
        <h2>${controller.state.end.title}</h2>
        <p>${controller.state.end.body}</p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="detail-action" data-back-select="true" type="button">${t('game.ending.exit', lang)}</button>
          <button class="detail-action" data-restart="true" type="button">${t('game.ending.restart', lang)}</button>
        </div>
      </section>
    </div>
  `
}

export function renderApp(controller: AppController): string {
  const lang = getLang()
  const nodes = getRenderedNodes(controller.mission, controller.state, controller.ui, controller.prevClues, controller.prevRenderedIds)
  return `
    <div class="app-shell">
      <main class="graph-stage">
        <div class="graph-viewport" data-pan-viewport="true">
          <div class="clock-node">
            <span class="clock-time">${formatTimer(getRemainingMs(controller.state))}</span>
            <div class="clock-actions">
              <button class="clock-btn" data-back-select="true" type="button">${t('game.hud.back', lang)}</button>
              <button class="clock-btn" data-restart="true" type="button">${t('game.hud.restart', lang)}</button>
            </div>
          </div>
          <div class="graph-canvas" data-pan-canvas="true" style="transform:translate(${controller.ui.pan.x}px, ${controller.ui.pan.y}px) scale(${controller.ui.zoom ?? 1})">
            <svg class="graph-svg" aria-hidden="true">
              ${renderEdgeMap(nodes)}
            </svg>
            <div class="graph-layer">
              ${renderGraphNodes(nodes, controller.state.clues)}
            </div>
          </div>
        </div>
      </main>

      ${renderClueBar(controller)}
      ${renderDetailPanel(controller)}
      ${renderPasswordModal(controller)}
      ${renderSortModal(controller)}
      ${renderClueLog(controller)}
      ${renderEnding(controller)}
    </div>
  `
}

function updateSortTrack(root: HTMLElement, mission: Mission, nodeId: string, order: number[]): void {
  const lang = getLang()
  const track = root.querySelector<HTMLElement>('[data-sort-track="true"]')
  const node = findNode(mission.root, nodeId)
  if (!track || !node?.sortSymbols) {
    return
  }
  track.textContent = order.length > 0
    ? order.map((index) => node.sortSymbols?.[index] ?? '').join(' / ')
    : t('game.sort.placeholder', lang)
}

function attachPan(root: HTMLElement, controller: AppController): void {
  const viewport = root.querySelector<HTMLElement>('[data-pan-viewport="true"]')
  const canvas = root.querySelector<HTMLElement>('[data-pan-canvas="true"]')
  if (!viewport || !canvas) {
    return
  }

  // Pinch-to-zoom via touch events (tracks both scale and pan drift)
  let pinchStartDist = 0
  let pinchStartZoom = 1
  let pinchStartMid = { x: 0, y: 0 }
  let pinchStartPan = { x: 0, y: 0 }

  viewport.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      pinchStartDist = Math.hypot(dx, dy)
      pinchStartZoom = controller.ui.zoom ?? 1
      pinchStartMid = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
      }
      pinchStartPan = { ...controller.ui.pan }
    }
  }, { passive: true })

  viewport.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2 && pinchStartDist > 0) {
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      const dist = Math.hypot(dx, dy)
      const newZoom = Math.min(3, Math.max(0.3, pinchStartZoom * (dist / pinchStartDist)))
      const mid = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
      }
      const panX = pinchStartPan.x + (mid.x - pinchStartMid.x)
      const panY = pinchStartPan.y + (mid.y - pinchStartMid.y)
      canvas.style.transform = `translate(${panX}px, ${panY}px) scale(${newZoom})`
    }
  }, { passive: true })

  viewport.addEventListener('touchend', (e) => {
    if (e.touches.length < 2 && pinchStartDist > 0) {
      const tMatch = canvas.style.transform.match(/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/)
      const sMatch = canvas.style.transform.match(/scale\(([\d.]+)\)/)
      if (tMatch) controller.setUi({ pan: { x: parseFloat(tMatch[1]), y: parseFloat(tMatch[2]) } })
      if (sMatch) controller.setUi({ zoom: parseFloat(sMatch[1]) })
      pinchStartDist = 0
    }
  }, { passive: true })

  // Mouse wheel zoom (desktop)
  viewport.addEventListener('wheel', (e) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    const newZoom = Math.min(3, Math.max(0.3, (controller.ui.zoom ?? 1) * delta))
    controller.setUi({ zoom: newZoom })
    const pan = controller.ui.pan
    canvas.style.transform = `translate(${pan.x}px, ${pan.y}px) scale(${newZoom})`
  }, { passive: false })

  viewport.addEventListener('pointerdown', (event) => {
    // Skip if touch starts on a node or UI panel
    const target = event.target as HTMLElement
    if (target.closest('[data-node-drag], .detail-panel, .modal-card')) return

    const startX = event.clientX
    const startY = event.clientY
    const origin = { ...controller.ui.pan }
    let captured = false

    const handleMove = (e: PointerEvent) => {
      const dx = e.clientX - startX
      const dy = e.clientY - startY
      if (!captured && Math.hypot(dx, dy) > 5) {
        captured = true
        viewport.setPointerCapture(event.pointerId)
      }
      if (captured) {
        canvas.style.transform = `translate(${origin.x + dx}px, ${origin.y + dy}px) scale(${controller.ui.zoom ?? 1})`
      }
    }

    const handleEnd = (e: PointerEvent) => {
      viewport.removeEventListener('pointermove', handleMove)
      viewport.removeEventListener('pointerup', handleEnd)
      viewport.removeEventListener('pointercancel', handleEnd)
      if (captured) {
        controller.setUi({ pan: { x: origin.x + (e.clientX - startX), y: origin.y + (e.clientY - startY) } })
      }
    }

    viewport.addEventListener('pointermove', handleMove)
    viewport.addEventListener('pointerup', handleEnd)
    viewport.addEventListener('pointercancel', handleEnd)
  })
}

export function attachInteractions(root: HTMLElement, controller: AppController): void {
  attachPan(root, controller)

  // Delegated touch tap handler for mobile WebView reliability
  const draggedNodeIds = new Set<string>()
  let touchStartPos = { x: 0, y: 0 }
  let lastTouchTapTime = 0

  root.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartPos = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }
  }, { passive: true })

  root.addEventListener('touchend', (e) => {
    const touch = e.changedTouches[0]
    if (!touch) return
    if (Math.hypot(touch.clientX - touchStartPos.x, touch.clientY - touchStartPos.y) > 10) return
    const el = (e.target as HTMLElement).closest<HTMLElement>('[data-node-drag]')
    if (!el) return
    const nodeId = el.dataset.nodeDrag!
    if (draggedNodeIds.has(nodeId)) { draggedNodeIds.delete(nodeId); return }
    e.preventDefault()
    lastTouchTapTime = Date.now()
    const nextId = (nodeId === 'root' && controller.ui.selectedNodeId === nodeId) ? null : nodeId
    controller.setUi({ selectedNodeId: nextId, pan: controller.ui.pan })
  }, { passive: false })

  // Graph node: click (desktop fallback, suppressed after touch) + pointer drag
  root.querySelectorAll<HTMLElement>('[data-node-drag]').forEach((element) => {
    element.addEventListener('click', (e) => {
      if (Date.now() - lastTouchTapTime < 500) return
      e.stopPropagation()
      const nodeId = element.dataset.nodeDrag!
      if (draggedNodeIds.has(nodeId)) { draggedNodeIds.delete(nodeId); return }
      const nextId = (nodeId === 'root' && controller.ui.selectedNodeId === nodeId) ? null : nodeId
      controller.setUi({ selectedNodeId: nextId, pan: controller.ui.pan })
    })

    // Pointer events handle drag only
    element.addEventListener('pointerdown', (e) => {
      e.stopPropagation()
      const nodeId = element.dataset.nodeDrag!
      const startClientX = e.clientX
      const startClientY = e.clientY
      const startLeft = parseInt(element.style.left, 10) || 0
      const startTop = parseInt(element.style.top, 10) || 0
      let dragged = false

      element.style.cursor = 'grabbing'
      element.style.zIndex = '50'

      const svg = root.querySelector<SVGSVGElement>('.graph-svg')
      const isDraggingItem = findNode(controller.mission.root, nodeId)?.type === 'item'

      const cleanup = () => {
        element.removeEventListener('pointermove', onMove)
        element.removeEventListener('pointerup', onUp)
        element.removeEventListener('pointercancel', onUp)
        element.style.cursor = ''
        element.style.zIndex = ''
        root.querySelectorAll<HTMLElement>('.is-drag-target, .is-drag-hovering').forEach((el) => {
          el.classList.remove('is-drag-target', 'is-drag-hovering')
        })
      }

      const onMove = (me: PointerEvent) => {
        const dx = me.clientX - startClientX
        const dy = me.clientY - startClientY
        if (!dragged && Math.hypot(dx, dy) > 4) {
          dragged = true
          draggedNodeIds.add(nodeId)
          element.setPointerCapture(e.pointerId)
        }
        if (dragged) {
          const nx = startLeft + dx
          const ny = startTop + dy
          element.style.left = `${nx}px`
          element.style.top = `${ny}px`
          svg?.querySelectorAll<SVGLineElement>(`[data-edge-from="${nodeId}"]`).forEach(line => {
            line.setAttribute('x1', String(nx))
            line.setAttribute('y1', String(ny))
          })
          svg?.querySelectorAll<SVGLineElement>(`[data-edge-to="${nodeId}"]`).forEach(line => {
            line.setAttribute('x2', String(nx))
            line.setAttribute('y2', String(ny))
          })
          if (isDraggingItem) {
            root.querySelectorAll<HTMLElement>('[data-node-drag]').forEach((el) => {
              const tid = el.dataset.nodeDrag
              if (!tid || tid === nodeId) return
              const rect = el.getBoundingClientRect()
              const isHovered = me.clientX >= rect.left && me.clientX <= rect.right && me.clientY >= rect.top && me.clientY <= rect.bottom
              el.classList.add('is-drag-target')
              el.classList.toggle('is-drag-hovering', isHovered)
            })
          }
        }
      }

      const onUp = (ue: PointerEvent) => {
        cleanup()
        if (dragged) {
          const newX = startLeft + (ue.clientX - startClientX)
          const newY = startTop + (ue.clientY - startClientY)

          const draggedNode = findNode(controller.mission.root, nodeId)
          if (draggedNode?.type === 'item') {
            const dropTargetId = findDropTarget(root, nodeId, ue.clientX, ue.clientY)
            if (dropTargetId) {
              const targetNode = findNode(controller.mission.root, dropTargetId)
              if (targetNode?.type === 'item') {
                controller.dispatch({ type: 'COMBINE', aId: nodeId, bId: dropTargetId })
              } else {
                controller.dispatch({ type: 'USE_ITEM', sourceId: nodeId, targetId: dropTargetId })
                controller.setUi({ selectedNodeId: dropTargetId })
              }
              return
            }
          }

          controller.setUi({
            nodePositions: { ...controller.ui.nodePositions, [nodeId]: { x: newX, y: newY } },
          })
        }
      }

      element.addEventListener('pointermove', onMove)
      element.addEventListener('pointerup', onUp)
      element.addEventListener('pointercancel', onUp)
    })
  })

  root.querySelectorAll<HTMLElement>('[data-interact-node]').forEach((element) => {
    element.addEventListener('click', () => {
      const nodeId = element.dataset.interactNode
      const interactIndex = Number(element.dataset.interactIndex ?? '-1')
      if (!nodeId || interactIndex < 0) {
        return
      }
      controller.dispatch({ type: 'INTERACT', nodeId, interactIndex })
    })
  })

  root.querySelectorAll<HTMLElement>('[data-open-password]').forEach((element) => {
    element.addEventListener('click', () => {
      const nodeId = element.dataset.nodeId
      if (!nodeId) {
        return
      }
      controller.setUi({
        modal: {
          kind: 'password',
          nodeId,
          value: '',
          error: null,
        },
      })
    })
  })

  root.querySelectorAll<HTMLElement>('[data-open-sort]').forEach((element) => {
    element.addEventListener('click', () => {
      const nodeId = element.dataset.nodeId
      if (!nodeId) {
        return
      }
      controller.setUi({
        modal: {
          kind: 'sort',
          nodeId,
          order: [],
          error: null,
        },
      })
    })
  })

  root.querySelectorAll<HTMLElement>('[data-item-use]').forEach((element) => {
    element.addEventListener('click', () => {
      const sourceId = element.dataset.itemUse
      const targetId = element.dataset.targetId
      if (!sourceId || !targetId) {
        return
      }
      controller.dispatch({ type: 'USE_ITEM', sourceId, targetId })
    })
  })

  root.querySelectorAll<HTMLElement>('[data-item-combine]').forEach((element) => {
    element.addEventListener('click', () => {
      const aId = element.dataset.itemCombine
      const bId = element.dataset.withId
      if (!aId || !bId) {
        return
      }
      controller.dispatch({ type: 'COMBINE', aId, bId })
    })
  })

  root.querySelectorAll<HTMLElement>('[data-password-form]').forEach((element) => {
    element.addEventListener('submit', (event) => {
      event.preventDefault()
      const nodeId = element.dataset.passwordForm
      const input = element.querySelector<HTMLInputElement>('input[name="password"]')
      if (!nodeId) {
        return
      }
      const prevClues = new Set(controller.state.clues)
      const next = controller.dispatch({ type: 'PASSWORD_SUBMIT', nodeId, value: input?.value ?? '' })
      const succeeded = Array.from(next.clues).some((c) => !prevClues.has(c))
      if (succeeded) {
        controller.setUi({ modal: null })
        return
      }
      controller.setUi({
        modal: {
          kind: 'password',
          nodeId,
          value: input?.value ?? '',
          error: t('game.password.error', getLang()),
        },
      })
    })
  })

  root.querySelectorAll<HTMLElement>('[data-sort-pick]').forEach((element) => {
    element.addEventListener('click', () => {
      if (!controller.ui.modal || controller.ui.modal.kind !== 'sort') {
        return
      }
      const index = Number(element.dataset.sortPick ?? '-1')
      if (index < 0 || controller.ui.modal.order.includes(index)) {
        return
      }
      const node = findNode(controller.mission.root, controller.ui.modal.nodeId)
      const max = node?.sortSymbols?.length ?? 0
      if (controller.ui.modal.order.length >= max) {
        return
      }
      const nextOrder = [...controller.ui.modal.order, index]
      controller.setUi({
        modal: {
          ...controller.ui.modal,
          order: nextOrder,
          error: null,
        },
      })
      updateSortTrack(root, controller.mission, controller.ui.modal.nodeId, nextOrder)
    })
  })

  root.querySelectorAll<HTMLElement>('[data-sort-reset]').forEach((element) => {
    element.addEventListener('click', () => {
      if (!controller.ui.modal || controller.ui.modal.kind !== 'sort') {
        return
      }
      controller.setUi({
        modal: {
          ...controller.ui.modal,
          order: [],
          error: null,
        },
      })
      updateSortTrack(root, controller.mission, controller.ui.modal.nodeId, [])
    })
  })

  root.querySelectorAll<HTMLElement>('[data-sort-submit]').forEach((element) => {
    element.addEventListener('click', () => {
      if (!controller.ui.modal || controller.ui.modal.kind !== 'sort') {
        return
      }
      const nodeId = element.dataset.sortSubmit
      if (!nodeId) {
        return
      }
      const prevSortClues = new Set(controller.state.clues)
      const next = controller.dispatch({ type: 'SORT_SUBMIT', nodeId, order: [...controller.ui.modal.order] })
      const sortSucceeded = Array.from(next.clues).some((c) => !prevSortClues.has(c))
      if (sortSucceeded) {
        controller.setUi({ modal: null })
        return
      }
      controller.setUi({
        modal: {
          ...controller.ui.modal,
          error: t('game.sort.error', getLang()),
        },
      })
    })
  })

  root.querySelectorAll<HTMLElement>('[data-open-clue-log]').forEach((element) => {
    element.addEventListener('click', () => {
      controller.setUi({ modal: { kind: 'clue-log' } })
    })
  })

  root.querySelectorAll<HTMLElement>('[data-modal-close]').forEach((element) => {
    element.addEventListener('click', (event) => {
      // Close when clicking the mask background OR any explicit close button (not a card click)
      const isButton = (event.target as HTMLElement).closest('[data-modal-card]') === null
      if (event.target === element || isButton) {
        controller.setUi({ modal: null })
      }
    })
  })

  root.querySelectorAll<HTMLElement>('[data-restart]').forEach((element) => {
    element.addEventListener('click', () => {
      controller.dispatch({ type: 'RESTART' })
    })
  })

  root.querySelectorAll<HTMLElement>('[data-back-select]').forEach((element) => {
    element.addEventListener('click', () => {
      controller.goToSelect?.()
    })
  })

  // Highlight SVG edges connected to the selected node
  const selectedId = controller.ui.selectedNodeId
  if (selectedId) {
    root.querySelectorAll<SVGLineElement>(`[data-edge-from="${selectedId}"], [data-edge-to="${selectedId}"]`).forEach((line) => {
      line.classList.add('is-active-edge')
    })
  }
}

// ── Exit-node animation (nodes becoming invisible) ────────────────────────────
/** Animates nodes that are about to disappear. Returns number of animated nodes. */
export function animateExitGameNodes(
  root: HTMLElement,
  prevClues: Set<string>,
  newClues: Set<string>,
  missionRoot: GameNode,
): number {
  const svg = root.querySelector<SVGSVGElement>('.graph-svg')
  const allEls = root.querySelectorAll<HTMLElement>('[data-node-drag]')
  const exiting: HTMLElement[] = []

  allEls.forEach((el) => {
    const nodeId = el.dataset.nodeDrag
    if (!nodeId || nodeId === 'root') return
    const node = findNode(missionRoot, nodeId)
    if (!node) return
    if (isNodeVisible(node, prevClues) && !isNodeVisible(node, newClues)) {
      exiting.push(el)
    }
  })

  exiting.forEach((el, i) => {
    const nodeId = el.dataset.nodeDrag
    // Fly toward parent (from SVG edge x1/y1), or toward ROOT_POINT
    let px = ROOT_POINT.x
    let py = ROOT_POINT.y
    if (nodeId && svg) {
      const edge = svg.querySelector<SVGLineElement>(`[data-edge-to="${nodeId}"]`)
      if (edge) {
        px = parseFloat(edge.getAttribute('x1') ?? String(ROOT_POINT.x))
        py = parseFloat(edge.getAttribute('y1') ?? String(ROOT_POINT.y))
      }
    }
    const nx = parseFloat(el.style.left || '0')
    const ny = parseFloat(el.style.top || '0')
    const dx = px - nx
    const dy = py - ny
    el.animate(
      [
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0.08)`, opacity: 0 },
      ],
      { duration: 260, delay: i * 40, easing: 'ease-in', fill: 'forwards' },
    )
    if (nodeId && svg) {
      const edgeEl = svg.querySelector<SVGLineElement>(`[data-edge-to="${nodeId}"]`)
      if (edgeEl) {
        edgeEl.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 180,
          delay: i * 40,
          easing: 'ease-in',
          fill: 'forwards',
        })
      }
    }
  })

  return exiting.length
}

// ── New-node discovery animation ─────────────────────────────────────────────
export function animateNewGameNodes(root: HTMLElement): void {
  const svg = root.querySelector<SVGSVGElement>('.graph-svg')
  const newNodes = root.querySelectorAll<HTMLElement>('[data-new-node]')
  newNodes.forEach((el, i) => {
    const nodeId = el.dataset.nodeDrag
    // Parent position from SVG edge (x1/y1 = parent coords)
    let px = ROOT_POINT.x
    let py = ROOT_POINT.y
    if (nodeId && svg) {
      const edge = svg.querySelector<SVGLineElement>(`[data-edge-to="${nodeId}"]`)
      if (edge) {
        px = parseFloat(edge.getAttribute('x1') ?? String(ROOT_POINT.x))
        py = parseFloat(edge.getAttribute('y1') ?? String(ROOT_POINT.y))
      }
    }
    const nx = parseFloat(el.style.left || '0')
    const ny = parseFloat(el.style.top || '0')
    const dx = px - nx
    const dy = py - ny
    el.animate(
      [
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0.08)`, opacity: 0 },
        { transform: 'translate(-50%, -50%) scale(1.05)', opacity: 1, offset: 0.75 },
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
      ],
      { duration: 360, delay: i * 60, easing: 'ease-out', fill: 'backwards' },
    )
    if (nodeId && svg) {
      const edgeEl = svg.querySelector<SVGLineElement>(`[data-edge-to="${nodeId}"]`)
      if (edgeEl) {
        edgeEl.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 240,
          delay: i * 60 + 80,
          easing: 'ease-out',
          fill: 'backwards',
        })
      }
    }
  })
}
