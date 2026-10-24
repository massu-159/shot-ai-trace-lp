import badgeAppStore from '../assets/badge-app-store-ja.svg'
import { APP_STORE_URL, IS_RELEASED } from '../constants'

type Props = {
  /** バッジの高さ（例: h-11 md:h-[52px]）。Apple の規定で 40px 以上にする。 */
  className?: string
}

// App Store 公式バッジ（日本語・黒。Apple Marketing Tools の ja-jp 版をそのまま使う。改変禁止）。
// 他ストアのバッジと並べる場合は黒を使い、App Store を先に置く（Apple のガイドライン）。
// リリース前はリンクにせず Coming Soon 表示（IS_RELEASED で自動復帰）。
export function AppStoreBadge({ className = 'h-11' }: Props) {
  if (!IS_RELEASED) {
    return <ComingSoonBadge className={className} />
  }

  return (
    <a href={APP_STORE_URL} className={`inline-flex ${className}`}>
      <img src={badgeAppStore} alt="App Store からダウンロード" className="h-full w-auto" />
    </a>
  )
}

export function ComingSoonBadge({ className }: { className: string }) {
  return (
    <span
      className={`inline-flex flex-col items-start justify-center rounded-[10px] bg-[#111512] px-5 leading-none whitespace-nowrap text-white ${className}`}
    >
      <span className="font-display text-[9px] font-semibold tracking-[0.18em] text-[#9aa89e]">
        COMING SOON
      </span>
      <span className="mt-1 text-[18px] font-bold">近日公開</span>
    </span>
  )
}
