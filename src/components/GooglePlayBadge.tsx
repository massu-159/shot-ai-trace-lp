import { GOOGLE_PLAY_URL, IS_RELEASED } from '../constants'
import { useContent } from '../content'
import { ComingSoonBadge } from './AppStoreBadge'

type Props = {
  /** バッジの高さ（App Store と同じ値を渡す。Google の規定で他ストアのバッジ以上の大きさにする）。 */
  className?: string
}

// Google Play 公式バッジ（日本語版「で手に入れよう」／英語版「GET IT ON」。改変禁止）。
// 画像（646×250）は透明な余白を含むため、リンクの高さ＝見えるバッジの高さにし、
// 画像は余白の分だけはみ出させて揃える（当て方は言語ごとの文言データに持つ）。
export function GooglePlayBadge({ className = 'h-11' }: Props) {
  const { store } = useContent()
  if (!IS_RELEASED) {
    return <ComingSoonBadge className={className} />
  }

  return (
    <a href={GOOGLE_PLAY_URL} className={`inline-flex ${store.googlePlayLinkClass} ${className}`}>
      <img
        src={store.googlePlayBadge}
        alt={store.googlePlayAlt}
        className={store.googlePlayImgClass}
      />
    </a>
  )
}
