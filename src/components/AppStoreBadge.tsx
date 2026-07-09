import { APP_STORE_URL } from '../constants'

type Props = {
  variant: 'dark' | 'light'
  className?: string
}

// App Store バッジ（DOWNLOAD ON THE / App Store の2段組）
export function AppStoreBadge({ variant, className = '' }: Props) {
  const colors =
    variant === 'dark'
      ? 'bg-[#111512] text-white hover:text-white'
      : 'bg-white text-ink hover:text-ink'
  const subColor = variant === 'dark' ? 'text-[#9aa89e]' : 'text-[#7d8a80]'
  return (
    <a
      href={APP_STORE_URL}
      className={`inline-flex flex-col items-start rounded-[14px] px-[26px] pt-[11px] pb-3 leading-none ${colors} ${className}`}
    >
      <span className={`font-display text-[9px] font-semibold tracking-[0.18em] ${subColor}`}>
        DOWNLOAD ON THE
      </span>
      <span className="mt-1 text-[20px] font-bold">App Store</span>
    </a>
  )
}
