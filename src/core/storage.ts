import { createInitialState, getEndingState } from './engine'
import type { GameStateV2, Mission } from './types'

const STORAGE_PREFIX = 'text-escape.save.v2'
const LEGACY_STORAGE_KEY = 'text-escape.save.v1'

export function getMissionStorageKey(missionId: string): string {
  return `${STORAGE_PREFIX}.${missionId}`
}

interface PersistedState {
  version: 2
  missionId: string
  startedAt: number
  deadlineAt: number
  clues: string[]
  end: GameStateV2['end']
}

function normalize(parsed: unknown, mission: Mission): GameStateV2 | null {
  if (!parsed || typeof parsed !== 'object') {
    return null
  }

  const candidate = parsed as Partial<PersistedState>
  if (
    candidate.version !== 2 ||
    candidate.missionId !== mission.id ||
    typeof candidate.startedAt !== 'number' ||
    typeof candidate.deadlineAt !== 'number' ||
    !Array.isArray(candidate.clues)
  ) {
    return null
  }

  return {
    version: 2,
    missionId: mission.id,
    startedAt: candidate.startedAt,
    deadlineAt: candidate.deadlineAt,
    clues: new Set(candidate.clues),
    end: candidate.end?.id ? getEndingState(mission, candidate.end.id) : null,
  }
}

export function hasSavedGame(missionId: string): boolean {
  try {
    const raw = localStorage.getItem(getMissionStorageKey(missionId))
    if (!raw) return false
    const parsed = JSON.parse(raw) as unknown
    if (!parsed || typeof parsed !== 'object') return false
    const candidate = parsed as Partial<PersistedState>
    return candidate.version === 2 && candidate.missionId === missionId
  } catch {
    return false
  }
}

export function loadGameState(mission: Mission): GameStateV2 {
  try {
    localStorage.removeItem(LEGACY_STORAGE_KEY)
    const missionKey = getMissionStorageKey(mission.id)
    let raw = localStorage.getItem(missionKey)
    // Migrate from old single-key format
    if (!raw) raw = localStorage.getItem(STORAGE_PREFIX)
    if (!raw) {
      return createInitialState(mission)
    }
    const parsed = JSON.parse(raw) as unknown
    const result = normalize(parsed, mission)
    if (result && !localStorage.getItem(missionKey)) {
      localStorage.setItem(missionKey, raw)
      localStorage.removeItem(STORAGE_PREFIX)
    }
    return result ?? createInitialState(mission)
  } catch {
    return createInitialState(mission)
  }
}

export function saveGameState(state: GameStateV2): void {
  try {
    const payload: PersistedState = {
      version: 2,
      missionId: state.missionId,
      startedAt: state.startedAt,
      deadlineAt: state.deadlineAt,
      clues: Array.from(state.clues),
      end: state.end,
    }
    localStorage.setItem(getMissionStorageKey(state.missionId), JSON.stringify(payload))
  } catch {
    // ignore storage failures
  }
}

export function clearGameState(missionId: string): void {
  try {
    localStorage.removeItem(getMissionStorageKey(missionId))
    localStorage.removeItem(LEGACY_STORAGE_KEY)
    localStorage.removeItem(STORAGE_PREFIX)
  } catch {
    // ignore storage failures
  }
}

/** Returns missionIds that have a completed ending saved. */
export function getCompletedMissions(): Set<string> {
  const result = new Set<string>()
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (!key?.startsWith(`${STORAGE_PREFIX}.`)) continue
      const raw = localStorage.getItem(key)
      if (!raw) continue
      const parsed = JSON.parse(raw) as unknown
      if (parsed && typeof parsed === 'object') {
        const candidate = parsed as { version?: number; missionId?: string; end?: { id?: string } | null }
        if (
          candidate.version === 2 &&
          candidate.missionId &&
          candidate.end != null &&
          candidate.end.id !== 'timeout'
        ) {
          result.add(candidate.missionId)
        }
      }
    }
  } catch {
    // ignore
  }
  return result
}

export { LEGACY_STORAGE_KEY }
