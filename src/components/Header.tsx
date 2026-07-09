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
      <div className="flex items-center gap-[9px]">
        <div className="size-[11px] rounded-full bg-[#00C853]" />
        <span className="font-display text-[18px] font-bold text-ink">Shot AI Trace</span>
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
        <a
          href={APP_STORE_URL}
          className="inline-flex items-center rounded-full bg-primary px-[18px] py-[9px] text-[12.5px] font-bold text-white hover:text-white"
        >
          App Storeで入手
        </a>
      </div>
    </div>
  )
}
