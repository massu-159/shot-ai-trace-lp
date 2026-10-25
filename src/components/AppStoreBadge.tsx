import { APP_STORE_URL, IS_RELEASED } from '../constants'
import { useContent } from '../content'

type Props = {
  /** バッジの高さ（例: h-11 md:h-[52px]）。Apple の規定で 40px 以上にする。 */
  className?: string
}

// App Store 公式バッジ（黒。日本語版は Apple Marketing Tools の ja-jp 版、英語版は US-UK 版をそのまま使う。改変禁止）。
// 他ストアのバッジと並べる場合は黒を使い、App Store を先に置く（Apple のガイドライン）。
// リリース前はリンクにせず Coming Soon 表示（IS_RELEASED で自動復帰）。
export function AppStoreBadge({ className = 'h-11' }: Props) {
  const { store } = useContent()
  if (!IS_RELEASED) {
    return <ComingSoonBadge className={className} />
  }

  return (
    <a href={APP_STORE_URL} className={`inline-flex ${className}`}>
      <img src={store.appStoreBadge} alt={store.appStoreAlt} className="h-full w-auto" />
    </a>
  )
}

export function ComingSoonBadge({ className }: { className: string }) {
  const { store } = useContent()
  return (
    <span
      className={`inline-flex flex-col items-start justify-center rounded-[10px] bg-[#111512] px-5 leading-none whitespace-nowrap text-white ${className}`}
    >
      <span className="font-display text-[9px] font-semibold tracking-[0.18em] text-[#9aa89e]">
        COMING SOON
      </span>
      <span className="mt-1 text-[18px] font-bold">{store.comingSoon}</span>
    </span>
  )
}
