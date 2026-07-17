import logoWhite from '../assets/logo-white.webp'
import { APP_STORE_URL } from '../constants'

const navItems = [
  { href: '#features', label: '機能' },
  { href: '#howto', label: '使い方' },
  { href: '#pricing', label: '料金' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  return (
    <div className="flex items-center justify-between px-5 py-4 md:px-12 md:py-[22px]">
      {/* アプリのホーム画面と同じ組（白ロゴ＋Michroma タイトル）。白ロゴは明るい
          背景では見えないため、アプリアイコンと同じ濃色の角丸チップに載せる。 */}
      <div className="flex items-center gap-[10px]">
        <span className="inline-flex size-9 items-center justify-center rounded-[6px] bg-ink">
          <img src={logoWhite} alt="" className="size-9" />
        </span>
        <span className="font-michroma text-[15px] text-ink">Shot AI Trace</span>
      </div>
      <div className="flex items-center gap-7">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hidden text-[13.5px] font-medium text-muted hover:text-muted md:inline"
          >
            {item.label}
          </a>
        ))}
        {/* モバイルは画面下部固定の CTA（MobileCtaBar）があるため md 以上でのみ表示 */}
        <a
          href={APP_STORE_URL}
          className="hidden items-center rounded-full bg-primary px-[18px] py-[9px] text-[12.5px] font-bold text-white hover:text-white md:inline-flex"
        >
          App Storeで入手
        </a>
      </div>
    </div>
  )
}
