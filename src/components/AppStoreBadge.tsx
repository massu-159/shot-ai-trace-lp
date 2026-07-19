import { APP_STORE_URL, IS_RELEASED } from '../constants'

type Props = {
  variant: 'dark' | 'light'
  className?: string
}

// App Store バッジ（DOWNLOAD ON THE / App Store の2段組）。
// リリース前はリンクにせず Coming Soon 表示（IS_RELEASED で自動復帰）。
export function AppStoreBadge({ variant, className = '' }: Props) {
  const colors =
    variant === 'dark'
      ? 'bg-[#111512] text-white hover:text-white'
      : 'bg-white text-ink hover:text-ink'
  const subColor = variant === 'dark' ? 'text-[#9aa89e]' : 'text-[#7d8a80]'
  const base = `inline-flex flex-col items-start rounded-[14px] px-[26px] pt-[11px] pb-3 leading-none ${colors} ${className}`

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
    <a href={APP_STORE_URL} className={base}>
      <span className={`font-display text-[9px] font-semibold tracking-[0.18em] ${subColor}`}>
        DOWNLOAD ON THE
      </span>
      <span className="mt-1 text-[20px] font-bold">App Store</span>
    </a>
  )
}
