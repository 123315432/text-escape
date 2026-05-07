export type ClueId = string
export type ClueSet = Set<ClueId>
export type EndingId = 'normal' | 'perfect' | 'timeout'

export type ClueCondition =
  | ClueId
  | `!${string}`
  | ['AND', ...ClueCondition[]]
  | ['OR', ...ClueCondition[]]

export type NodeType = 'item' | 'password' | 'breakable' | 'click-sort' | 'switch' | 'backpack' | 'text'

export interface InteractDefinition {
  label: string
  desc?: string
  when?: ClueCondition
  addClues?: ClueId[]
}

export interface NodeState {
  visible: boolean
  locked: boolean
  completed: boolean
  active: boolean
}

export interface LayoutHint {
  direction?: number
  distance?: number
}

export interface ItemUseDefinition {
  targetIds: string[]
  when?: ClueCondition
  addClues: ClueId[]
}

export interface CombineDefinition {
  targetId: string
  when?: ClueCondition
  addClues: ClueId[]
}

export interface GameNode {
  id: string
  title: string
  desc: string
  type: NodeType
  scenes?: ClueId[]
  preClue?: ClueCondition
  doneClue?: ClueCondition
  sceneClue?: ClueId
  isFixed?: boolean
  layout?: LayoutHint
  interactions?: InteractDefinition[]
  children?: GameNode[]
  code?: string
  successClues?: ClueId[]
  sortSymbols?: string[]
  sortSolution?: number[]
  itemUse?: ItemUseDefinition
  combineWith?: CombineDefinition[]
}

export interface Trigger {
  id: string
  when: ClueCondition
  addClues: ClueId[]
}

export interface EndingDefinition {
  title: string
  body: string
}

export interface Mission {
  id: string
  title: string
  subtitle: string
  intro: string
  timeLimitMs: number
  initialClues: ClueId[]
  root: GameNode
  triggers: Trigger[]
  /** 场景线索 → BGM 文件路径 (public/audio/bgm/ 下) */
  bgmScenes?: Record<string, string>
  /** 线索 → 发现提示文字 */
  clueMessages?: Record<string, string>
  /** mission 专属结局文案，未提供时走默认值 */
  endings?: Partial<Record<EndingId, EndingDefinition>>
  /** Optional English translations — applied by buildLocalizedMission() */
  translations?: { en?: MissionTranslationEn }
}

export interface EndingState {
  id: EndingId
  title: string
  body: string
}

export interface GameStateV2 {
  version: 2
  missionId: string
  startedAt: number
  deadlineAt: number
  clues: ClueSet
  end: EndingState | null
}

export interface UiState {
  selectedNodeId: string | null
  pan: {
    x: number
    y: number
  }
  zoom: number
  nodePositions: Record<string, { x: number; y: number }>
  modal:
    | null
    | {
        kind: 'password'
        nodeId: string
        value: string
        error: string | null
      }
    | {
        kind: 'sort'
        nodeId: string
        order: number[]
        error: string | null
      }
    | { kind: 'clue-log' }
}

// ── i18n ─────────────────────────────────────────────────────────────────
export interface TranslatedNode {
  title?: string
  desc?: string
  sortSymbols?: string[]
  /** Override interaction label/desc by array index */
  interactions?: Array<{ label?: string; desc?: string } | undefined>
}

export interface MissionTranslationEn {
  title?: string
  subtitle?: string
  intro?: string
  clueMessages?: Record<string, string>
  endings?: Partial<Record<EndingId, { title?: string; body?: string }>>
  nodes?: Record<string, TranslatedNode>
}

export type GameAction =
  | { type: 'RESTART' }
  | { type: 'INTERACT'; nodeId: string; interactIndex: number }
  | { type: 'PASSWORD_SUBMIT'; nodeId: string; value: string }
  | { type: 'SORT_SUBMIT'; nodeId: string; order: number[] }
  | { type: 'USE_ITEM'; sourceId: string; targetId: string }
  | { type: 'COMBINE'; aId: string; bId: string }
  | { type: 'TIMEOUT' }
