import './style.css'
import { createInitialState, reduceGame } from './core/engine'
import { clearGameState, getCompletedMissions, loadGameState, saveGameState, getMissionStorageKey } from './core/storage'
import { getLang, setLang } from './core/lang'
import { buildLocalizedMission } from './core/i18n'
import type { GameAction, GameStateV2, Mission, UiState } from './core/types'
import { MISSIONS } from './data/missions'
import { animateExitGameNodes, animateNewGameNodes, attachInteractions, renderApp } from './ui/render'
import { animateWmCollapse, animateWmExpand, attachWmInteractions, attachWmPan, renderWorldMap } from './ui/world-map'
import { playCombine, playClick, playDiscover, playEnding, playMajorUnlock, playSceneSwitch, playWrong, playTick, switchBgmSrc, stopAllBgm } from './audio/sfx'
import { toastNewClues } from './ui/toast'
import { cgGameplayStart, cgGameplayStop, cgHappytime, cgLoadingStop, cgMidgameAd } from './core/crazygames'

const appElement = document.querySelector<HTMLDivElement>('#app')
if (!appElement) throw new Error('Missing #app root')
const app = appElement

function centerPan(): { x: number; y: number } {
  return { x: Math.round(window.innerWidth / 2 - 560), y: Math.round(window.innerHeight * 0.35 - 330) }
}

function centerWmPan(): { x: number; y: number } {
  // World map root is at (500, 400); place it at 50%x / 40%y of screen
  return { x: Math.round(window.innerWidth / 2 - 500), y: Math.round(window.innerHeight * 0.42 - 400) }
}

// ── World map state ───────────────────────────────────────────────────────
let wmPan = centerWmPan()
let wmZoom = 1
let expandedChapters = new Set<string>(['wm-root', 'chapter-ch1'])
let wmCollapsingChapters = new Set<string>() // chapters mid-collapse animation
let selectedWmMission: string | null = null
let wmNodePositions: Record<string, { x: number; y: number }> = {}

// ── Game state ────────────────────────────────────────────────────────────
let activeMission: Mission | null = null
let state!: GameStateV2
let ui!: UiState
let _prevCluesForAnim: Set<string> | undefined

// ── World map screen ──────────────────────────────────────────────────────
function renderWorldMapScreen(): void {
  const completed = getCompletedMissions()
  const lang = getLang()
  const missionMeta = Object.fromEntries(
    Object.values(MISSIONS).map((m) => {
      const localized = buildLocalizedMission(m, lang)
      return [m.id, { title: localized.title, subtitle: localized.subtitle, intro: localized.intro }]
    }),
  )
  app.innerHTML = renderWorldMap(expandedChapters, completed, wmPan, wmZoom, selectedWmMission, missionMeta, wmNodePositions, lang)

  attachWmPan(
    app,
    () => wmPan,
    (pan) => {
      wmPan = pan
      // no full re-render needed for pan-end
    },
    () => wmZoom,
    (zoom) => { wmZoom = zoom },
  )

  attachWmInteractions(app, {
    onToggleChapter(id) {
      if (wmCollapsingChapters.has(id)) {
        // Mid-collapse — cancel it, switch to expand immediately
        wmCollapsingChapters.delete(id)
        expandedChapters.add(id)
        renderWorldMapScreen()
        animateWmExpand(app, id, wmNodePositions)
        return
      }
      const wasExpanded = expandedChapters.has(id)
      if (wasExpanded) {
        wmCollapsingChapters.add(id)
        animateWmCollapse(app, id, wmNodePositions, () => {
          if (!wmCollapsingChapters.has(id)) return // stale — user already toggled back
          wmCollapsingChapters.delete(id)
          expandedChapters.delete(id)
          selectedWmMission = null
          renderWorldMapScreen()
        })
      } else {
        expandedChapters.add(id)
        renderWorldMapScreen()
        animateWmExpand(app, id, wmNodePositions)
      }
    },
    onSelectMission(missionId) {
      selectedWmMission = selectedWmMission === missionId ? null : missionId
      renderWorldMapScreen()
    },
    onStartMission(missionId, isContinue) {
      if (!isContinue) clearGameState(missionId)
      startMission(missionId)
    },
    onNodeMove(id, x, y) {
      wmNodePositions[id] = { x, y }
      // Position already updated in DOM — no re-render needed
    },
    onToggleLang() {
      setLang(getLang() === 'zh' ? 'en' : 'zh')
      if (activeMission) {
        activeMission = buildLocalizedMission(MISSIONS[state.missionId], getLang())
      }
      renderWorldMapScreen()
    },
  })
}

async function startMission(id: string): Promise<void> {
  // Show midgame ad between levels (SDK auto-throttles to max 1 per 3 min)
  await cgMidgameAd({ onPause: () => stopAllBgm(), onResume: () => {} })
  const m = MISSIONS[id]
  if (!m) return
  activeMission = buildLocalizedMission(m, getLang())
  selectedWmMission = null
  state = loadGameState(activeMission)
  ui = { selectedNodeId: 'root', pan: centerPan(), nodePositions: {}, modal: null, zoom: 1 }
  saveGameState(state)
  cgGameplayStart()
  render()
  // BGM on first interaction
  document.addEventListener('pointerdown', function bgmStart() {
    if (activeMission?.bgmScenes) {
      const activeScene = Array.from(state.clues).find((c) => c.startsWith('*') && activeMission!.bgmScenes![c])
      switchBgmSrc(activeScene ? activeMission.bgmScenes[activeScene] : null)
    }
    document.removeEventListener('pointerdown', bgmStart)
  })
}

function backToWorldMap(): void {
  activeMission = null
  cgGameplayStop()
  stopAllBgm()
  renderWorldMapScreen()
}

// ── Game render ───────────────────────────────────────────────────────────
function doRender(prevCluesSnap: Set<string> | undefined): void {
  const m = activeMission
  if (!m) return
  // Capture which nodes exist in the DOM before we replace — drives enter animation
  const prevRenderedIds = new Set(
    Array.from(app.querySelectorAll<HTMLElement>('[data-node-drag]')).map((el) => el.dataset.nodeDrag ?? '')
  )
  const hasExistingNodes = prevRenderedIds.size > 0
  app.innerHTML = renderApp({
    dispatch, mission: m, state, ui, setUi, goToSelect: backToWorldMap,
    prevClues: prevCluesSnap,
    prevRenderedIds: hasExistingNodes ? prevRenderedIds : undefined,
  })
  attachInteractions(app, { dispatch, mission: m, state, ui, setUi, goToSelect: backToWorldMap })
  if (hasExistingNodes) {
    animateNewGameNodes(app)
  }
}

function render(): void {
  if (!activeMission) {
    renderWorldMapScreen()
    return
  }
  const prevCluesSnap = _prevCluesForAnim
  _prevCluesForAnim = undefined

  if (prevCluesSnap !== undefined) {
    const exitCount = animateExitGameNodes(app, prevCluesSnap, state.clues, activeMission.root)
    if (exitCount > 0) {
      // Wait for exit animations to play (260ms max + 40ms per node stagger)
      const delay = 260 + Math.min(exitCount - 1, 4) * 40
      window.setTimeout(() => doRender(prevCluesSnap), delay)
      return
    }
  }

  doRender(prevCluesSnap)
}

function setUi(next: Partial<UiState>): void {
  ui = { ...ui, ...next }
  render()
}

function dispatch(action: GameAction): GameStateV2 {
  if (!activeMission) return state

  if (action.type === 'RESTART') {
    clearGameState(activeMission.id)
    state = createInitialState(activeMission)
    ui = { selectedNodeId: 'root', pan: centerPan(), nodePositions: {}, modal: null, zoom: 1 }
    saveGameState(state)
    render()
    return state
  }

  const prevClues = new Set(state.clues)
  const prevEnd = state.end
  const m = activeMission

  state = reduceGame(state, action, m)
  saveGameState(state)
  _prevCluesForAnim = prevClues

  // Audio + toast feedback
  const gained = Array.from(state.clues).filter((c) => !prevClues.has(c))
  const sceneChanged = gained.some((c) => c.startsWith('*'))
  const anyNew = gained.some((c) => !c.startsWith('@'))

  if (action.type === 'TIMEOUT') {
    stopAllBgm()
  } else if (state.end && !prevEnd) {
    cgGameplayStop()
    if (state.end.id === 'perfect') cgHappytime()
    stopAllBgm()
    playEnding(state.end.id === 'perfect')
  } else if (action.type === 'COMBINE') {
    playCombine()
  } else if (sceneChanged) {
    playSceneSwitch()
    if (m.bgmScenes) {
      const activeScene = Array.from(state.clues).find((c) => c.startsWith('*') && m.bgmScenes![c])
      switchBgmSrc(activeScene ? m.bgmScenes[activeScene] : null)
    }
  } else if (anyNew) {
    const isUnlock = gained.some(
      (c) =>
        c.includes('unlocked') ||
        c.includes('solved') ||
        c.includes('ready') ||
        c.includes('gate') ||
        c.includes('opened') ||
        c.includes('merged') ||
        c.includes('aligned') ||
        c.includes('combined') ||
        c.includes('placed'),
    )
    if (isUnlock) playMajorUnlock()
    else playDiscover()
  } else if (action.type === 'PASSWORD_SUBMIT' || action.type === 'SORT_SUBMIT') {
    playWrong()
  } else {
    playClick()
  }

  toastNewClues(prevClues, state.clues, m.clueMessages)

  render()
  return state
}

// ── Boot ──────────────────────────────────────────────────────────────────
cgLoadingStop()
renderWorldMapScreen()

// ── Storage sync (cross-tab) ───────────────────────────────────────────────
window.addEventListener('storage', (event) => {
  if (!activeMission) return
  if (event.key === getMissionStorageKey(activeMission.id)) {
    activeMission = buildLocalizedMission(MISSIONS[activeMission.id], getLang())
    state = loadGameState(activeMission)
    render()
  }
})

// ── Timer + Tick SFX ──────────────────────────────────────────────────────
let _lastTickSecond = -1

window.setInterval(() => {
  if (!activeMission || !state) return
  if (!state.end && Date.now() >= state.deadlineAt) {
    dispatch({ type: 'TIMEOUT' })
    return
  }
  const remain = Math.max(0, state.deadlineAt - Date.now())
  const totalSeconds = Math.ceil(remain / 1000)

  // Update clock node display (survives re-renders via querySelector)
  const clockNode = app.querySelector<HTMLElement>('.clock-node')
  const clockEl = clockNode?.querySelector<HTMLElement>('.clock-time')
  if (clockEl) {
    const m = Math.max(0, Math.floor(totalSeconds / 60))
    const s = Math.max(0, totalSeconds % 60)
    clockEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
    clockNode?.classList.toggle('is-urgent', totalSeconds <= 10 && totalSeconds > 0)
  }

  // Milestone tick sounds — fire once per second boundary
  if (totalSeconds !== _lastTickSecond && !state.end) {
    _lastTickSecond = totalSeconds
    if (totalSeconds === 180 || totalSeconds === 120 || totalSeconds === 60) {
      // 3 min / 2 min / 1 min mark
      playTick(false)
    } else if (totalSeconds > 10 && totalSeconds <= 60 && totalSeconds % 10 === 0) {
      // Every 10 s while between 60 s and 10 s
      playTick(false)
    } else if (totalSeconds > 0 && totalSeconds <= 10) {
      // Every second in last 10 s
      playTick(true)
    }
  }
}, 1000)
