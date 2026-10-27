import logoWhite from '../assets/logo-white.webp'
import { IS_RELEASED } from '../constants'
import { useContent } from '../content'

export function Header() {
  const { header, store, langLink } = useContent()
  return (
    <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 md:px-12 md:py-[22px]">
      {/* アプリのホーム画面と同じ組（白ロゴ＋Michroma タイトル）。白ロゴは明るい
          背景では見えないため、アプリアイコンと同じ濃色の角丸チップに載せる。 */}
      <div className="flex items-center gap-[10px]">
        <span className="inline-flex size-9 items-center justify-center rounded-[6px] bg-ink">
          <img src={logoWhite} alt="" className="size-9" />
        </span>
        <span className="font-michroma text-[15px] text-ink">Shot AI Trace</span>
      </div>
      <div className="flex items-center gap-5 md:gap-7">
        {header.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hidden text-[13.5px] font-medium text-muted hover:text-muted md:inline"
          >
            {item.label}
          </a>
        ))}
        {/* モバイルは画面下部固定の CTA（MobileCtaBar）があるため md 以上でのみ表示。
            PC は両ストアのバッジを並べたダウンロード欄（FooterCta）へ移動する。 */}
        {IS_RELEASED ? (
          <a
            href="#download"
            className="hidden items-center rounded-full bg-primary px-[18px] py-[9px] text-[12.5px] font-bold text-white hover:text-white md:inline-flex"
          >
            {header.getApp}
          </a>
        ) : (
          <span className="hidden items-center rounded-full bg-line px-[18px] py-[9px] text-[12.5px] font-bold text-muted md:inline-flex">
            {store.comingSoonLong}
          </span>
        )}
        {/* 言語切替（もう一方の言語の同じページへ）。スマホでも出す。 */}
        <a
          href={langLink.href}
          hrefLang={langLink.hrefLang}
          lang={langLink.hrefLang}
          className="rounded-full border border-[#d9e2da] px-3 py-[6px] text-[12px] font-medium text-muted hover:text-ink"
        >
          {langLink.label}
        </a>
      </div>
    </div>
  )
}
