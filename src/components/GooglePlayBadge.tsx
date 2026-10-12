import { GOOGLE_PLAY_URL, IS_RELEASED } from '../constants'

type Props = {
  variant: 'dark' | 'light'
  className?: string
  /** 左右の余白。className の px-* は基本の px-[26px] に負けるため、変えるときはこちらで渡す。 */
  padX?: string
}

// Google Play バッジ（GET IT ON / Google Play の2段組）。AppStoreBadge と同じ組・配色。
// リリース前はリンクにせず Coming Soon 表示（IS_RELEASED で自動復帰）。
export function GooglePlayBadge({ variant, className = '', padX = 'px-[26px]' }: Props) {
  const colors =
    variant === 'dark'
      ? 'bg-[#111512] text-white hover:text-white'
      : 'bg-white text-ink hover:text-ink'
  const subColor = variant === 'dark' ? 'text-[#9aa89e]' : 'text-[#7d8a80]'
  const base = `inline-flex flex-col items-start rounded-[14px] ${padX} pt-[11px] pb-3 leading-none whitespace-nowrap ${colors} ${className}`

  if (!IS_RELEASED) {
    return (
      <span className={base}>
        <span className={`font-display text-[9px] font-semibold tracking-[0.18em] ${subColor}`}>
          COMING SOON
        </span>
        <span className="mt-1 text-[20px] font-bold">近日公開</span>
      </span>
    )
  }

  return (
    <a href={GOOGLE_PLAY_URL} className={base}>
      <span className={`font-display text-[9px] font-semibold tracking-[0.18em] ${subColor}`}>
        GET IT ON
      </span>
      <span className="mt-1 text-[20px] font-bold">Google Play</span>
    </a>
  )
}
