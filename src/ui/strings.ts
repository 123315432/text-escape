import type { Lang } from '../core/lang'

const STRINGS: Record<string, Record<Lang, string>> = {
  'wm.logo':              { zh: '文字逃脱',           en: 'Text Escape' },
  'wm.hint':              { zh: '点击节点展开探索',   en: 'Click nodes to explore' },
  'wm.locked':            { zh: '🔒 未开放',          en: '🔒 Locked' },
  'wm.challenge':         { zh: '挑战',               en: 'Play' },
  'wm.in_progress':       { zh: '▶ 进行中',           en: '▶ In Progress' },
  'wm.completed':         { zh: '✓ 已通关',           en: '✓ Completed' },
  'wm.detail.kicker':     { zh: '关卡',               en: 'Level' },
  'wm.badge.completed':   { zh: '✓ 已通关',           en: '✓ Completed' },
  'wm.btn.continue':      { zh: '继续',               en: 'Continue' },
  'wm.btn.restart':       { zh: '重开',               en: 'Restart' },
  'wm.btn.start':         { zh: '开始',               en: 'Start' },
  'wm.expand':            { zh: '点击展开',           en: 'Tap to expand' },
  'game.hud.memory':      { zh: '记忆',               en: 'Clues' },
  'game.hud.back':        { zh: '← 世界地图',         en: '← Map' },
  'game.hud.restart':     { zh: '重开',               en: 'Restart' },
  'game.modal.close':     { zh: '✕',                  en: '✕' },
  'game.modal.submit':    { zh: '确认',               en: 'Confirm' },
  'game.sort.submit':     { zh: '提交排列',           en: 'Submit Order' },
  'game.sort.reset':      { zh: '重置',               en: 'Reset' },
  'game.password.ph':     { zh: '输入密码…',           en: 'Enter code…' },
  'game.clue_log.title':  { zh: '线索记忆',           en: 'Clue Log' },
  'game.clue_log.empty':  { zh: '尚无发现',           en: 'Nothing found yet' },
  'game.clue_log.count':  { zh: '已解锁 {count} 条',  en: '{count} unlocked' },
  'game.detail.locked':   { zh: '当前节点仍被锁住，先完成前置线索。', en: 'This node is still locked. Clear its prerequisites first.' },
  'game.item.use':        { zh: '用于',               en: 'Use on' },
  'game.item.combine':    { zh: '与 {target} 组合',    en: 'Combine with {target}' },
  'game.item.none':       { zh: '这件道具当前没有可执行动作。', en: 'This item has no available action right now.' },
  'game.password.done':   { zh: '密码锁已经处理完了。', en: 'This lock has already been solved.' },
  'game.password.open':   { zh: '输入密码',           en: 'Enter Code' },
  'game.sort.done':       { zh: '机关已经归位。',     en: 'This mechanism is already aligned.' },
  'game.sort.open':       { zh: '排列符号',           en: 'Arrange Symbols' },
  'game.sort.placeholder':{ zh: '点击符号排序',       en: 'Tap symbols to build the order' },
  'game.modal.close_btn': { zh: '关闭',               en: 'Close' },
  'game.ending.kicker':   { zh: '结局',               en: 'Ending' },
  'game.ending.restart':  { zh: '重新开始',           en: 'Restart' },
  'game.hud.menu':        { zh: '主菜单',             en: 'Map' },
  'game.password.error':  { zh: '密码不对。',         en: 'That code is wrong.' },
  'game.sort.error':      { zh: '顺序不对。',         en: 'That order is wrong.' },
  'game.ending.exit':     { zh: '返回地图',           en: 'Back to Map' },
  'game.ending.timeout':  { zh: '超时结局',           en: 'Time\'s Up' },
  'default.normal.title': { zh: '逃脱成功',           en: 'Escaped' },
  'default.normal.body':  { zh: '你最终让出口解锁，离开了这处困住你的空间，但仍有些细节被留在了身后。',
                            en: 'You unlocked the exit and left this place behind — though some things remained unanswered.' },
  'default.perfect.title':{ zh: '完美逃脱',           en: 'Perfect Escape' },
  'default.perfect.body': { zh: '你补齐了所有关键线索，连这处空间背后的因果也一并理顺，然后安然离开。',
                            en: 'You pieced together every clue, unraveled the full story behind this place, and walked out clean.' },
  'default.timeout.title':{ zh: '超时结局',           en: 'Time\'s Up' },
  'default.timeout.body': { zh: '时间耗尽时，机关与出口一同复位。你没能在一切重新闭合前走出去。',
                            en: 'When time ran out, every mechanism reset. You didn\'t make it through before it all closed again.' },
}

export function t(key: string, lang: Lang): string {
  return STRINGS[key]?.[lang] ?? STRINGS[key]?.['zh'] ?? key
}

export function tUnlock(chapterNum: number, lang: Lang): string {
  return lang === 'en'
    ? `Complete Chapter ${chapterNum} to unlock`
    : `通关第${'一二三四五'[chapterNum - 1]}章解锁`
}

export function tProgress(done: number, total: number, lang: Lang): string {
  return lang === 'en' ? `${done}/${total} done` : `${done}/${total} 通关`
}
