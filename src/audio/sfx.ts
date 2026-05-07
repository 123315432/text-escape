import { Howl, Howler } from 'howler'

/** 全局音量控制 */
let sfxVolume = 0.75
let bgmVolume = 0.35
let muted = false

export function setMuted(value: boolean): void {
  muted = value
  Howler.mute(value)
}
export function isMuted(): boolean {
  return muted
}

// ── SFX ────────────────────────────────────────────────
function sfx(src: string, volume = sfxVolume): Howl {
  return new Howl({ src: [src], volume, preload: true })
}

const sounds = {
  click:         sfx('/audio/sfx/click.mp3',         0.55),
  discover:      sfx('/audio/sfx/discover.mp3',      0.7),
  unlock:        sfx('/audio/sfx/unlock.mp3',         0.75),
  majorUnlock:   sfx('/audio/sfx/major_unlock.mp3',  0.8),
  combine:       sfx('/audio/sfx/combine.mp3',        0.72),
  sceneSwitch:   sfx('/audio/sfx/scene_switch.mp3',  0.65),
  wrong:         sfx('/audio/sfx/wrong.mp3',          0.55),
  itemDrop:      sfx('/audio/sfx/item_drop.mp3',     0.65),
  endingPerfect: sfx('/audio/sfx/ending_perfect.mp3', 0.8),
  endingNormal:  sfx('/audio/sfx/ending_normal.mp3',  0.7),
}

export function playClick():       void { sounds.click.play() }
export function playTick(urgent = false): void {
  // urgent = last 10 s (every second); normal = milestone ticks
  if (urgent) sounds.wrong.play()
  else sounds.click.play()
}
export function playDiscover():    void { sounds.discover.play() }
export function playUnlock():      void { sounds.unlock.play() }
export function playMajorUnlock(): void { sounds.majorUnlock.play() }
export function playCombine():     void { sounds.combine.play() }
export function playSceneSwitch(): void { sounds.sceneSwitch.play() }
export function playWrong():       void { sounds.wrong.play() }
export function playItemDrop():    void { sounds.itemDrop.play() }
export function playEnding(perfect = false): void {
  if (perfect) sounds.endingPerfect.play()
  else sounds.endingNormal.play()
}

// ── BGM ────────────────────────────────────────────────
// Dynamic BGM: keyed by scene clue string (e.g. '*hall'), value is Howl instance
const bgmCache = new Map<string, Howl>()

function getBgmHowl(src: string): Howl {
  let h = bgmCache.get(src)
  if (!h) {
    h = new Howl({ src: [src], volume: bgmVolume, loop: true, preload: true })
    bgmCache.set(src, h)
  }
  return h
}

let currentBgmSrc: string | null = null

export function switchBgmSrc(src: string | null, fadeDuration = 800): void {
  if (src === currentBgmSrc) return

  if (currentBgmSrc) {
    const old = getBgmHowl(currentBgmSrc)
    if (old.playing()) {
      old.fade(bgmVolume, 0, fadeDuration)
      setTimeout(() => old.stop(), fadeDuration)
    }
  }

  currentBgmSrc = src
  if (src) {
    const next = getBgmHowl(src)
    next.volume(0)
    next.play()
    next.fade(0, bgmVolume, fadeDuration)
  }
}

export function stopAllBgm(fadeDuration = 600): void {
  if (currentBgmSrc) {
    const old = getBgmHowl(currentBgmSrc)
    if (old.playing()) {
      old.fade(bgmVolume, 0, fadeDuration)
      setTimeout(() => old.stop(), fadeDuration)
    }
    currentBgmSrc = null
  }
}
