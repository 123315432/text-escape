// CrazyGames SDK v2 wrapper — safe to call on any platform (no-ops outside crazygames.com)

declare global {
  interface Window {
    CrazyGames?: {
      SDK: {
        getEnvironment: () => Promise<'local' | 'crazygames' | 'disabled'>
        game: {
          gameplayStart: () => Promise<void>
          gameplayStop: () => Promise<void>
          sdkGameLoadingStart: () => Promise<void>
          sdkGameLoadingStop: () => Promise<void>
          happytime: () => Promise<void>
        }
        ad: {
          requestAd: (type: 'midgame' | 'rewarded', callbacks: {
            adStarted: () => void
            adFinished: () => void
            adError: (error: string, errorData?: unknown) => void
          }) => void
          hasAdblock: () => Promise<boolean>
        }
      }
    }
  }
}

function getSDK() {
  return window.CrazyGames?.SDK
}

let _isCG: boolean | null = null

export async function isCrazyGames(): Promise<boolean> {
  if (_isCG !== null) return _isCG
  try {
    const env = await getSDK()?.getEnvironment()
    _isCG = env === 'crazygames'
  } catch {
    _isCG = false
  }
  return _isCG
}

export function cgGameplayStart() {
  getSDK()?.game.gameplayStart().catch(() => {})
}

export function cgGameplayStop() {
  getSDK()?.game.gameplayStop().catch(() => {})
}

export function cgLoadingStart() {
  getSDK()?.game.sdkGameLoadingStart().catch(() => {})
}

export function cgLoadingStop() {
  getSDK()?.game.sdkGameLoadingStop().catch(() => {})
}

export function cgHappytime() {
  getSDK()?.game.happytime().catch(() => {})
}

/**
 * Show a midgame ad (between levels). Auto-throttled by SDK (max 1 per 3 min).
 * Returns a promise that resolves when ad finishes or is skipped/errored.
 */
export function cgMidgameAd(opts?: { onPause?: () => void; onResume?: () => void }): Promise<void> {
  return new Promise((resolve) => {
    const sdk = getSDK()
    if (!sdk) { resolve(); return }
    sdk.ad.requestAd('midgame', {
      adStarted: () => opts?.onPause?.(),
      adFinished: () => { opts?.onResume?.(); resolve() },
      adError: () => { opts?.onResume?.(); resolve() },
    })
  })
}

/**
 * Show a rewarded ad (user-initiated, e.g. for hints).
 * Returns true if the ad completed (reward should be given), false if cancelled/error.
 */
export function cgRewardedAd(opts?: { onPause?: () => void; onResume?: () => void }): Promise<boolean> {
  return new Promise((resolve) => {
    const sdk = getSDK()
    if (!sdk) { resolve(false); return }
    sdk.ad.requestAd('rewarded', {
      adStarted: () => opts?.onPause?.(),
      adFinished: () => { opts?.onResume?.(); resolve(true) },
      adError: () => { opts?.onResume?.(); resolve(false) },
    })
  })
}
