import { hasSavedGame } from '../core/storage'
import type { Lang } from '../core/lang'
import { t, tUnlock, tProgress } from './strings'

export interface WorldNode {
  id: string
  title: string
  subtitle: string
  titleEn?: string
  subtitleEn?: string
  type: 'root' | 'chapter' | 'mission'
  missionId?: string
  locked?: boolean
  position: { x: number; y: number }
  children?: WorldNode[]
}

// ── Static world tree ─────────────────────────────────────────────────────
// Canvas is 1120 × 760; root centered at (500, 400)
// 5章制: 醒来(左上) → 深入(上中) → 迷失(右上) → 觉醒(右) → 终章(下)
export const WORLD_TREE: WorldNode = {
  id: 'wm-root',
  title: '文字逃脱', titleEn: 'Text Escape',
  subtitle: '文字密室逃脱', subtitleEn: 'Text-based escape rooms',
  type: 'root',
  position: { x: 500, y: 400 },
  children: [
    {
      id: 'chapter-ch1',
      title: '第一章·醒来', titleEn: 'Ch.1 · Awakening',
      subtitle: '推开世界的第一扇门', subtitleEn: 'Push open the first door',
      type: 'chapter',
      position: { x: 170, y: 270 },
      children: [
        { id: 'wm-castle',     title: '烬色古堡',    titleEn: 'Ashen Castle',
          subtitle: '烛火在门缝间跳动 · 15min',   subtitleEn: 'Candlelight in the crack · 15min',
          type: 'mission', missionId: 'castle',     position: { x: 50, y: 150 } },
        { id: 'wm-concession', title: '民国租界',    titleEn: 'The Concession',
          subtitle: '雨夜里最后一封电报 · 15min', subtitleEn: 'Last telegram on a rainy night · 15min',
          type: 'mission', missionId: 'concession', position: { x: 170, y: 110 } },
        { id: 'wm-cyberpunk',  title: '赛博水墨',    titleEn: 'Cyber Ink',
          subtitle: '霓虹下生长的古老机关 · 15min', subtitleEn: 'Ancient machines under neon · 15min',
          type: 'mission', missionId: 'cyberpunk',  position: { x: 290, y: 150 } },
      ],
    },
    {
      id: 'chapter-ch2',
      title: '第二章·深入', titleEn: 'Ch.2 · Descent',
      subtitle: '谜题开始嵌套彼此', subtitleEn: 'Puzzles begin to nest',
      type: 'chapter',
      position: { x: 430, y: 140 },
      children: [
        { id: 'wm-tomb',    title: '五行古墓',    titleEn: 'Five Elements Tomb',
          subtitle: '五行失衡，墓室在颤抖 · 25min', subtitleEn: 'The tomb trembles · 25min',
          type: 'mission', missionId: 'tomb',    position: { x: 310, y: 40 } },
        { id: 'wm-opera',   title: '戏班后台',    titleEn: 'Opera Backstage',
          subtitle: '台下无人，台上有鬼 · 25min', subtitleEn: 'Empty seats, ghosts on stage · 25min',
          type: 'mission', missionId: 'opera',   position: { x: 430, y: 20 } },
        { id: 'wm-library', title: '沉船图书馆',  titleEn: 'Sunken Library',
          subtitle: '水从书页间慢慢浸入 · 30min', subtitleEn: 'Water seeps through pages · 30min',
          type: 'mission', missionId: 'library', position: { x: 560, y: 40 } },
      ],
    },
    {
      id: 'chapter-ch3',
      title: '第三章·迷失', titleEn: 'Ch.3 · Lost',
      subtitle: '越走越深，越走越慢', subtitleEn: 'Deeper and slower',
      type: 'chapter',
      position: { x: 770, y: 200 },
      children: [
        { id: 'wm-mirror', title: '镜像双生',  titleEn: 'Mirror Twin',
          subtitle: '镜中的你比你先动 · 35min', subtitleEn: 'Your reflection moves first · 35min',
          type: 'mission', missionId: 'mirror', position: { x: 650, y: 80 } },
        { id: 'wm-pirate', title: '海盗船',    titleEn: 'Pirate Ship',
          subtitle: '每条路通向不同的终点 · 30min', subtitleEn: 'Every path ends differently · 30min',
          type: 'mission', missionId: 'pirate', position: { x: 780, y: 50 } },
        { id: 'wm-puppet', title: '傀儡戏台',  titleEn: 'Puppet Stage',
          subtitle: '线断了，人偶还在走 · 40min', subtitleEn: 'Strings cut, puppet still walks · 40min',
          type: 'mission', missionId: 'puppet', position: { x: 910, y: 80 } },
      ],
    },
    {
      id: 'chapter-ch4',
      title: '第四章·觉醒', titleEn: 'Ch.4 · Reckoning',
      subtitle: '你以为你在前进', subtitleEn: "You think you're moving forward",
      type: 'chapter',
      position: { x: 880, y: 430 },
      children: [
        { id: 'wm-timeloop', title: '时间循环旅馆', titleEn: 'Time Loop Hotel',
          subtitle: '又一个早晨，还是同一天 · 30min', subtitleEn: 'Another morning, same day · 30min',
          type: 'mission', missionId: 'timeloop', position: { x: 780, y: 560 } },
        { id: 'wm-traps',    title: '盗墓·活陷阱', titleEn: 'Living Traps',
          subtitle: '每一步都可能是最后一步 · 35min', subtitleEn: 'Every step might be the last · 35min',
          type: 'mission', missionId: 'traps',    position: { x: 920, y: 600 } },
        { id: 'wm-archive',  title: '档案室',      titleEn: 'The Archive',
          subtitle: '灰烬里藏着真相 · 50min', subtitleEn: 'Truth hides in the ashes · 50min',
          type: 'mission', missionId: 'archive',  position: { x: 1050, y: 540 } },
      ],
    },
    {
      id: 'chapter-ch5',
      title: '终章·真相', titleEn: 'Final Chapter · Truth',
      subtitle: '一切都有来由', subtitleEn: 'Everything has a reason',
      type: 'chapter',
      position: { x: 490, y: 650 },
      children: [
        { id: 'wm-inn',   title: '雪夜旅店',  titleEn: 'Snowbound Inn',
          subtitle: '暴风雪里没有人无辜 · 45min', subtitleEn: 'No one is innocent · 45min',
          type: 'mission', missionId: 'inn',   position: { x: 340, y: 730 } },
        { id: 'wm-dream', title: '梦境回廊',  titleEn: 'Dream Corridor',
          subtitle: '你在梦里，梦不在你里 · 70min', subtitleEn: "You're in the dream · 70min",
          type: 'mission', missionId: 'dream', position: { x: 490, y: 750 } },
        { id: 'wm-meta',  title: '游戏之外',  titleEn: 'Beyond the Game',
          subtitle: '你以为你在玩游戏 · 90min', subtitleEn: "You think you're playing · 90min",
          type: 'mission', missionId: 'meta',  position: { x: 650, y: 730 } },
      ],
    },
  ],
}

// ── Sequential unlock logic ────────────────────────────────────────────────
// Each chapter unlocks when at least 1 mission in the previous chapter is completed.
function computeLockedChapterIds(completedIds: Set<string>): Set<string> {
  const chapters = WORLD_TREE.children ?? []
  const locked = new Set<string>()
  for (let i = 1; i < chapters.length; i++) {
    const prevMissions = chapters[i - 1].children ?? []
    const anyPrevDone = prevMissions.some((c) => c.missionId && completedIds.has(c.missionId))
    if (!anyPrevDone) {
      // Lock this chapter and all subsequent ones
      for (let j = i; j < chapters.length; j++) {
        locked.add(chapters[j].id)
      }
      break
    }
  }
  return locked
}

// ── Utilities ─────────────────────────────────────────────────────────────
export function findWorldNode(node: WorldNode, id: string): WorldNode | null {
  if (node.id === id) return node
  for (const child of node.children ?? []) {
    const found = findWorldNode(child, id)
    if (found) return found
  }
  return null
}

interface WmEdge {
  fromId: string
  toId: string
  fromPos: { x: number; y: number }
  toPos: { x: number; y: number }
  locked: boolean
}

function resolvedPos(
  node: WorldNode,
  nodePositions: Record<string, { x: number; y: number }>,
): { x: number; y: number } {
  return nodePositions[node.id] ?? node.position
}

function collectVisible(
  node: WorldNode,
  expandedIds: Set<string>,
  parent: WorldNode | null,
  nodes: WorldNode[],
  edges: WmEdge[],
  nodePositions: Record<string, { x: number; y: number }>,
  lockedChapterIds: Set<string>,
  parentLocked: boolean,
): void {
  const isLocked = parentLocked || lockedChapterIds.has(node.id) || !!node.locked
  const pos = resolvedPos(node, nodePositions)
  nodes.push({ ...node, position: pos, locked: isLocked })
  if (parent) {
    edges.push({
      fromId: parent.id,
      toId: node.id,
      fromPos: resolvedPos(parent, nodePositions),
      toPos: pos,
      locked: isLocked,
    })
  }
  if (expandedIds.has(node.id)) {
    for (const child of node.children ?? []) {
      collectVisible(child, expandedIds, node, nodes, edges, nodePositions, lockedChapterIds, isLocked)
    }
  }
}

function wmClasses(node: WorldNode, expandedIds: Set<string>, completedIds: Set<string>): string {
  const cls = ['graph-node', `wm-node-${node.type}`]
  if (node.id === 'wm-root') cls.push('is-root')
  if (node.locked) {
    cls.push('wm-locked')
  } else if (node.type === 'mission' && node.missionId && completedIds.has(node.missionId)) {
    cls.push('wm-completed')
  } else {
    cls.push('wm-available')
  }
  if ((node.type === 'chapter' || node.type === 'root') && expandedIds.has(node.id)) cls.push('wm-expanded')
  return cls.join(' ')
}

function wmMeta(node: WorldNode, completedIds: Set<string>, expandedIds: Set<string>, lang: Lang): string {
  if (node.locked) {
    if (node.type === 'chapter') {
      const chapters = WORLD_TREE.children ?? []
      const idx = chapters.findIndex((c) => c.id === node.id)
      if (idx > 0) return tUnlock(idx, lang)
    }
    return t('wm.locked', lang)
  }
  if (node.type === 'root') {
    const sub = lang === 'en' ? (node.subtitleEn ?? node.subtitle) : node.subtitle
    return expandedIds.has(node.id) ? sub : t('wm.expand', lang)
  }
  if (node.type === 'mission' && node.missionId) {
    if (completedIds.has(node.missionId)) return t('wm.completed', lang)
    if (hasSavedGame(node.missionId)) return t('wm.in_progress', lang)
    return t('wm.challenge', lang)
  }
  if (node.type === 'chapter') {
    const total = node.children?.filter((c) => !c.locked).length ?? 0
    const done = node.children?.filter((c) => c.missionId && completedIds.has(c.missionId)).length ?? 0
    const sub = lang === 'en' ? (node.subtitleEn ?? node.subtitle) : node.subtitle
    return expandedIds.has(node.id) ? tProgress(done, total, lang) : sub
  }
  return lang === 'en' ? (node.subtitleEn ?? node.subtitle) : node.subtitle
}


// ── Render ────────────────────────────────────────────────────────────────
export function renderWorldMap(
  expandedIds: Set<string>,
  completedIds: Set<string>,
  pan: { x: number; y: number },
  zoom: number,
  selectedMissionId: string | null,
  missions: Record<string, { title: string; subtitle: string; intro: string }>,
  nodePositions: Record<string, { x: number; y: number }> = {},
  lang: Lang = 'zh',
): string {
  const lockedChapterIds = computeLockedChapterIds(completedIds)
  const nodes: WorldNode[] = []
  const edges: WmEdge[] = []
  collectVisible(WORLD_TREE, expandedIds, null, nodes, edges, nodePositions, lockedChapterIds, false)

  const svgLines = edges
    .map(
      (e) =>
        `<line class="graph-edge${e.locked ? ' is-locked' : ''}" data-edge-from="${e.fromId}" data-edge-to="${e.toId}" x1="${e.fromPos.x}" y1="${e.fromPos.y}" x2="${e.toPos.x}" y2="${e.toPos.y}"></line>`,
    )
    .join('')

  const nodeHtml = nodes
    .map((node) => {
      const displayTitle = lang === 'en' ? (node.titleEn ?? node.title) : node.title
      return `<button class="${wmClasses(node, expandedIds, completedIds)}" data-wm-node="${node.id}" style="left:${node.position.x}px;top:${node.position.y}px" type="button"${node.locked ? ' disabled' : ''}>
          <strong>${displayTitle}</strong>
          <span class="wm-node-meta">${wmMeta(node, completedIds, expandedIds, lang)}</span>
        </button>`
    })
    .join('')

  // Right-side detail panel when a mission is selected
  let detailHtml = ''
  if (selectedMissionId) {
    const m = missions[selectedMissionId]
    if (m) {
      const hasSave = hasSavedGame(selectedMissionId)
      const isCompleted = completedIds.has(selectedMissionId)
      detailHtml = `
        <aside class="detail-panel wm-detail-panel">
          <div class="detail-kicker">${t('wm.detail.kicker', lang)}</div>
          <h2 class="detail-title">${m.title}</h2>
          <div class="wm-detail-sub">${m.subtitle}</div>
          <p class="detail-desc">${m.intro}</p>
          ${isCompleted ? `<div class="wm-detail-badge">${t('wm.badge.completed', lang)}</div>` : ''}
          <div class="detail-actions">
            ${hasSave && !isCompleted ? `<button class="detail-action wm-btn-primary" data-wm-start="${selectedMissionId}" data-continue="1">${t('wm.btn.continue', lang)}</button>` : ''}
            <button class="detail-action${hasSave && !isCompleted ? ' ghost' : ' wm-btn-primary'}" data-wm-start="${selectedMissionId}">${hasSave && !isCompleted ? t('wm.btn.restart', lang) : t('wm.btn.start', lang)}</button>
          </div>
        </aside>
      `
    }
  }

  return `
    <div class="wm-shell">
      <header class="wm-header">
        <span class="wm-header-logo">${t('wm.logo', lang)}</span>
        <span class="wm-header-hint">${t('wm.hint', lang)}</span>
        <button class="wm-lang-toggle" data-wm-lang-toggle type="button">${lang === 'zh' ? 'EN' : '中'}</button>
      </header>
      <div class="wm-body">
        <main class="graph-stage wm-stage">
          <div class="graph-viewport" data-pan-viewport="true">
            <div class="graph-canvas" data-pan-canvas="true" style="transform:translate(${pan.x}px,${pan.y}px) scale(${zoom})">
              <svg class="graph-svg" aria-hidden="true">${svgLines}</svg>
              <div class="graph-layer">${nodeHtml}</div>
            </div>
          </div>
        </main>
        ${detailHtml}
      </div>
    </div>
  `
}

// ── Pan (standalone, no AppController dependency) ─────────────────────────
export function attachWmPan(
  root: HTMLElement,
  getPan: () => { x: number; y: number },
  onPanEnd: (pan: { x: number; y: number }) => void,
  getZoom: () => number,
  onZoomEnd: (zoom: number) => void,
): void {
  const viewport = root.querySelector<HTMLElement>('[data-pan-viewport="true"]')
  const canvas = root.querySelector<HTMLElement>('[data-pan-canvas="true"]')
  if (!viewport || !canvas) return

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
      pinchStartZoom = getZoom()
      pinchStartMid = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
      }
      pinchStartPan = { ...getPan() }
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
      if (tMatch) onPanEnd({ x: parseFloat(tMatch[1]), y: parseFloat(tMatch[2]) })
      if (sMatch) onZoomEnd(parseFloat(sMatch[1]))
      pinchStartDist = 0
    }
  }, { passive: true })

  // Mouse wheel zoom (desktop)
  viewport.addEventListener('wheel', (e) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    const newZoom = Math.min(3, Math.max(0.3, getZoom() * delta))
    onZoomEnd(newZoom)
    const pan = getPan()
    canvas.style.transform = `translate(${pan.x}px, ${pan.y}px) scale(${newZoom})`
  }, { passive: false })

  viewport.addEventListener('pointerdown', (event) => {
    const target = event.target as HTMLElement
    if (target.closest('[data-wm-node], .wm-detail-panel')) return

    const startX = event.clientX
    const startY = event.clientY
    const origin = { ...getPan() }
    let captured = false

    const onMove = (e: PointerEvent) => {
      const dx = e.clientX - startX
      const dy = e.clientY - startY
      if (!captured && Math.hypot(dx, dy) > 5) {
        captured = true
        viewport.setPointerCapture(event.pointerId)
      }
      if (captured) {
        canvas.style.transform = `translate(${origin.x + dx}px, ${origin.y + dy}px) scale(${getZoom()})`
      }
    }

    const onUp = (e: PointerEvent) => {
      viewport.removeEventListener('pointermove', onMove)
      viewport.removeEventListener('pointerup', onUp)
      viewport.removeEventListener('pointercancel', onUp)
      if (captured) {
        onPanEnd({ x: origin.x + (e.clientX - startX), y: origin.y + (e.clientY - startY) })
      }
    }

    viewport.addEventListener('pointermove', onMove)
    viewport.addEventListener('pointerup', onUp)
    viewport.addEventListener('pointercancel', onUp)
  })
}

// ── Interactions (drag-to-move + tap-to-interact) ─────────────────────────
export function attachWmInteractions(
  root: HTMLElement,
  callbacks: {
    onToggleChapter: (id: string) => void
    onSelectMission: (missionId: string) => void
    onStartMission: (missionId: string, isContinue: boolean) => void
    onNodeMove: (id: string, x: number, y: number) => void
    onToggleLang?: () => void
  },
): void {
  root.querySelector('[data-wm-lang-toggle]')?.addEventListener('click', () => {
    callbacks.onToggleLang?.()
  })
  const svg = root.querySelector<SVGSVGElement>('.graph-svg')

  // Delegated touch tap handler — fires on root, finds node via closest()
  const draggedNodes = new Set<string>()
  let touchStartPos = { x: 0, y: 0 }
  let lastTouchTapTime = 0

  function wmNodeTap(id: string) {
    const node = findWorldNode(WORLD_TREE, id)
    if (!node) return
    if (node.type === 'root' || node.type === 'chapter') {
      callbacks.onToggleChapter(id)
    } else if (node.type === 'mission' && node.missionId) {
      callbacks.onSelectMission(node.missionId)
    }
  }

  root.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartPos = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }
  }, { passive: true })

  root.addEventListener('touchend', (e) => {
    const touch = e.changedTouches[0]
    if (!touch) return
    if (Math.hypot(touch.clientX - touchStartPos.x, touch.clientY - touchStartPos.y) > 10) return
    const el = (e.target as HTMLElement).closest<HTMLElement>('[data-wm-node]')
    if (!el || (el as HTMLButtonElement).disabled) return
    const id = el.dataset.wmNode!
    if (draggedNodes.has(id)) { draggedNodes.delete(id); return }
    e.preventDefault()
    lastTouchTapTime = Date.now()
    wmNodeTap(id)
  }, { passive: false })

  root.querySelectorAll<HTMLElement>('[data-wm-node]').forEach((el) => {
    // Click fallback for desktop — suppressed within 500ms of a touch tap
    el.addEventListener('click', (e) => {
      if (Date.now() - lastTouchTapTime < 500) return
      e.stopPropagation()
      const id = el.dataset.wmNode!
      if (draggedNodes.has(id)) { draggedNodes.delete(id); return }
      if ((el as HTMLButtonElement).disabled) return
      wmNodeTap(id)
    })

    // Pointer events handle drag only
    el.addEventListener('pointerdown', (e) => {
      e.stopPropagation()
      const id = el.dataset.wmNode!
      const node = findWorldNode(WORLD_TREE, id)
      if (!node || (el as HTMLButtonElement).disabled) return

      const startClientX = e.clientX
      const startClientY = e.clientY
      const startLeft = parseInt(el.style.left, 10) || 0
      const startTop = parseInt(el.style.top, 10) || 0
      let dragged = false

      el.style.cursor = 'grabbing'
      el.style.zIndex = '50'

      const cleanup = () => {
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerup', onUp)
        el.removeEventListener('pointercancel', onUp)
        el.style.cursor = ''
        el.style.zIndex = ''
      }

      const onMove = (me: PointerEvent) => {
        const dx = me.clientX - startClientX
        const dy = me.clientY - startClientY
        if (!dragged && Math.hypot(dx, dy) > 4) {
          dragged = true
          draggedNodes.add(id)
          el.setPointerCapture(e.pointerId)
        }
        if (dragged) {
          const nx = startLeft + dx
          const ny = startTop + dy
          el.style.left = `${nx}px`
          el.style.top = `${ny}px`
          svg?.querySelectorAll<SVGLineElement>(`[data-edge-from="${id}"]`).forEach((line) => {
            line.setAttribute('x1', String(nx))
            line.setAttribute('y1', String(ny))
          })
          svg?.querySelectorAll<SVGLineElement>(`[data-edge-to="${id}"]`).forEach((line) => {
            line.setAttribute('x2', String(nx))
            line.setAttribute('y2', String(ny))
          })
        }
      }

      const onUp = (ue: PointerEvent) => {
        cleanup()
        if (dragged) {
          callbacks.onNodeMove(id, startLeft + (ue.clientX - startClientX), startTop + (ue.clientY - startClientY))
        }
      }

      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerup', onUp)
      el.addEventListener('pointercancel', onUp)
    })
  })

  root.querySelectorAll<HTMLElement>('[data-wm-start]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const missionId = btn.dataset.wmStart!
      const isContinue = !!btn.dataset.continue
      callbacks.onStartMission(missionId, isContinue)
    })
  })
}

// ── Expand animation: children fly out from parent node ───────────────────
export function animateWmExpand(
  root: HTMLElement,
  chapterId: string,
  nodePositions: Record<string, { x: number; y: number }>,
): void {
  const chapterNode = findWorldNode(WORLD_TREE, chapterId)
  if (!chapterNode) return

  const chapterPos = nodePositions[chapterId] ?? chapterNode.position

  ;(chapterNode.children ?? []).forEach((child, i) => {
    if (child.locked) return
    const childPos = nodePositions[child.id] ?? child.position
    const dx = chapterPos.x - childPos.x
    const dy = chapterPos.y - childPos.y
    const delay = i * 55

    // Animate node: fly from parent position → final position
    const childEl = root.querySelector<HTMLElement>(`[data-wm-node="${child.id}"]`)
    childEl?.getAnimations().forEach((a) => a.cancel())
    if (childEl) {
      childEl.animate(
        [
          { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0.08)`, opacity: 0 },
          { transform: 'translate(-50%, -50%) scale(1.05)', opacity: 1, offset: 0.75 },
          { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
        ],
        { duration: 380, delay, easing: 'ease-out', fill: 'backwards' },
      )
    }

    // Animate edge: fade in
    const edgeEl = root.querySelector<SVGLineElement>(`[data-edge-to="${child.id}"]`)
    if (edgeEl) {
      edgeEl.getAnimations().forEach((a) => a.cancel())
      edgeEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 260,
        delay: delay + 60,
        easing: 'ease-out',
        fill: 'backwards',
      })
    }
  })
}

// ── Collapse animation: children fly back into parent ─────────────────────
export function animateWmCollapse(
  root: HTMLElement,
  chapterId: string,
  nodePositions: Record<string, { x: number; y: number }>,
  onDone: () => void,
): void {
  const chapterNode = findWorldNode(WORLD_TREE, chapterId)
  if (!chapterNode) { onDone(); return }

  const chapterPos = nodePositions[chapterId] ?? chapterNode.position
  const children = (chapterNode.children ?? []).filter((c) => !c.locked)
  if (children.length === 0) { onDone(); return }

  let maxDelay = 0
  children.forEach((child, i) => {
    const childPos = nodePositions[child.id] ?? child.position
    const dx = chapterPos.x - childPos.x
    const dy = chapterPos.y - childPos.y
    const delay = i * 40
    maxDelay = Math.max(maxDelay, delay)

    const childEl = root.querySelector<HTMLElement>(`[data-wm-node="${child.id}"]`)
    if (childEl) {
      childEl.getAnimations().forEach((a) => a.cancel())
      childEl.animate(
        [
          { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
          { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0.08)`, opacity: 0 },
        ],
        { duration: 260, delay, easing: 'ease-in', fill: 'forwards' },
      )
    }

    const edgeEl = root.querySelector<SVGLineElement>(`[data-edge-to="${child.id}"]`)
    if (edgeEl) {
      edgeEl.getAnimations().forEach((a) => a.cancel())
      edgeEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 180,
        delay,
        easing: 'ease-in',
        fill: 'forwards',
      })
    }
  })

  window.setTimeout(onDone, 260 + maxDelay + 20)
}
