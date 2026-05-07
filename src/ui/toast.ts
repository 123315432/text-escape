/**
 * 轻量 Toast 通知系统 — slideInBlurred 动画
 * 挂在 document.body 上，不受 #app 重渲染影响
 */
let container: HTMLElement | null = null

function getContainer(): HTMLElement {
  if (!container || !document.body.contains(container)) {
    container = document.createElement('div')
    container.id = 'toast-root'
    document.body.appendChild(container)
  }
  return container
}

export type ToastKind = 'info' | 'success' | 'error'

export function showToast(message: string, kind: ToastKind = 'info', duration = 2400): void {
  const root = getContainer()
  const el = document.createElement('div')
  el.className = `toast toast-${kind}`
  el.textContent = message
  root.appendChild(el)

  const remove = () => {
    el.classList.add('toast-exit')
    el.addEventListener('animationend', () => el.remove(), { once: true })
  }
  setTimeout(remove, duration)
}

/** 对比两个线索集，返回新增的线索 */
export function newClues(before: Set<string>, after: Set<string>): string[] {
  return Array.from(after).filter((c) => !before.has(c))
}

function isSuccess(clue: string): boolean {
  return clue.includes('unlocked') || clue.includes('solved') || clue.includes('ready') ||
    clue.includes('repaired') || clue.includes('opened') || clue.includes('combined')
}

export function toastNewClues(
  before: Set<string>,
  after: Set<string>,
  clueMessages?: Record<string, string>
): void {
  const added = newClues(before, after)
  const scenes = added.filter((c) => c.startsWith('*'))
  const rest = added.filter((c) => !c.startsWith('*') && !c.startsWith('@'))
  const ordered = [...scenes, ...rest]

  ordered.forEach((clue, i) => {
    const text = clueMessages?.[clue]
    if (!text) return
    const kind: ToastKind = clue.startsWith('*') ? 'info' : isSuccess(clue) ? 'success' : 'info'
    setTimeout(() => showToast(text, kind), i * 220)
  })
}
