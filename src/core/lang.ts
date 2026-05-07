export type Lang = 'zh' | 'en'

const LANG_KEY = 'text-escape.lang'

let _lang: Lang = 'zh'
try {
  const stored = localStorage.getItem(LANG_KEY)
  if (stored === 'zh' || stored === 'en') _lang = stored
} catch {
  // SSR / test environments
}

export function getLang(): Lang {
  return _lang
}

export function setLang(l: Lang): void {
  _lang = l
  try {
    localStorage.setItem(LANG_KEY, l)
  } catch {
    // ignore
  }
}
