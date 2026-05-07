import type { EndingId, GameNode, Mission, MissionTranslationEn, TranslatedNode } from './types'
import type { Lang } from './lang'

const DEFAULT_ENDINGS_EN: Record<EndingId, { title: string; body: string }> = {
  normal: {
    title: 'Escaped',
    body: 'You unlocked the exit and left this place behind, though some details were still lost in the dark.',
  },
  perfect: {
    title: 'Perfect Escape',
    body: 'You gathered every critical clue, untangled the logic behind the place, and walked away clean.',
  },
  timeout: {
    title: "Time's Up",
    body: 'When time ran out, the mechanisms and the exit reset together. You did not make it out before everything sealed shut again.',
  },
}

export function localizeNode(node: GameNode, nodeMap: Record<string, TranslatedNode>): GameNode {
  const t = nodeMap[node.id]
  return {
    ...node,
    title: t?.title ?? node.title,
    desc: t?.desc ?? node.desc,
    sortSymbols: t?.sortSymbols ?? node.sortSymbols,
    interactions: node.interactions?.map((inter, i) => ({
      ...inter,
      label: t?.interactions?.[i]?.label ?? inter.label,
      desc: t?.interactions?.[i]?.desc ?? inter.desc,
    })),
    children: node.children?.map((child) => localizeNode(child, nodeMap)),
  }
}

function mergeEndings(
  base: Mission['endings'],
  override: MissionTranslationEn['endings'],
): Mission['endings'] {
  const result: NonNullable<Mission['endings']> = {}
  for (const id of ['normal', 'perfect', 'timeout'] as EndingId[]) {
    result[id] = {
      ...DEFAULT_ENDINGS_EN[id],
      ...base?.[id],
      ...override?.[id],
    }
  }
  return result
}

/** Returns a mission with English text applied (shallow clone, no mutation). */
export function buildLocalizedMission(mission: Mission, lang: Lang): Mission {
  if (lang === 'zh' || !mission.translations?.en) return mission
  const en = mission.translations.en
  return {
    ...mission,
    title: en.title ?? mission.title,
    subtitle: en.subtitle ?? mission.subtitle,
    intro: en.intro ?? mission.intro,
    clueMessages: en.clueMessages
      ? { ...mission.clueMessages, ...en.clueMessages }
      : mission.clueMessages,
    endings: mergeEndings(mission.endings, en.endings),
    root: localizeNode(mission.root, en.nodes ?? {}),
  }
}
