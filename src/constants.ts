// リリース前は false。App Store 公開時に true へ変えて APP_STORE_URL を
// 実 URL に差し替えると、全 CTA が「Coming Soon」から購入導線へ一斉に戻る。
export const IS_RELEASED = true

// App Store 公開 URL（2026-07 リリース済み）
export const APP_STORE_URL = 'https://apps.apple.com/jp/app/shot-ai-trace/id6790091722'

// Google Play 公開 URL（Android 版。日本のみ配信）
export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.shotaitrace.app'

// 最新情報の発信先（運営者のゴルフ特化アカウント）
export const INSTAGRAM_URL = 'https://www.instagram.com/massu_golf.92/'

/**
 * 閲覧端末に合わせたストア導線（ボタン1つの CTA 用）。Android 端末なら Google Play、
 * それ以外（iPhone・PC など）は App Store。両ストアを並べる箇所は各バッジを直接使う。
 */
export function storeForUserAgent(userAgent: string): { url: string; label: string } {
  return /Android/i.test(userAgent)
    ? { url: GOOGLE_PLAY_URL, label: 'Google Playで入手' }
    : { url: APP_STORE_URL, label: 'App Storeで入手' }
}
