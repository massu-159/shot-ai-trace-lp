import badgeGooglePlay from '../assets/badge-google-play-ja.png'
import { GOOGLE_PLAY_URL, IS_RELEASED } from '../constants'
import { ComingSoonBadge } from './AppStoreBadge'

type Props = {
  /** バッジの高さ（App Store と同じ値を渡す。Google の規定で他ストアのバッジ以上の大きさにする）。 */
  className?: string
}

// Google Play 公式バッジ（日本語版「で手に入れよう」。改変禁止）。
// 画像（646×250）は上下に透明な余白が 29px ずつあり、見えるバッジは高さ 192px 分。
// リンクの高さ＝見えるバッジの高さにし、画像は 250/192 倍で上下にはみ出させて揃える。
export function GooglePlayBadge({ className = 'h-11' }: Props) {
  if (!IS_RELEASED) {
    return <ComingSoonBadge className={className} />
  }

  return (
    <a href={GOOGLE_PLAY_URL} className={`inline-flex items-center ${className}`}>
      <img
        src={badgeGooglePlay}
        alt="Google Play で手に入れよう"
        className="h-[130.21%] w-auto max-w-none"
      />
    </a>
  )
}
