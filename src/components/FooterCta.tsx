import type { ReactNode } from 'react'
import qrAppStore from '../assets/qr-app-store.svg'
import qrGooglePlay from '../assets/qr-google-play.svg'
import { INSTAGRAM_URL, IS_RELEASED } from '../constants'
import { useContent } from '../content'
import { AppStoreBadge } from './AppStoreBadge'
import { GooglePlayBadge } from './GooglePlayBadge'
import { FadeIn } from './FadeIn'

// バッジと、その下に同じストア URL の QR コード（PC 幅のみ。スマホはバッジから直接開けるため出さない）
function StoreColumn({ badge, qr, store }: { badge: ReactNode; qr: string; store: string }) {
  const { footer } = useContent()
  return (
    <div className="flex flex-col items-center">
      {badge}
      {IS_RELEASED && (
        <div className="mt-4 hidden flex-col items-center md:flex">
          <img
            src={qr}
            alt={footer.qrAlt(store)}
            width={120}
            height={120}
            className="size-[120px] rounded-[10px] bg-white"
          />
          <span className="mt-2 text-[12px] text-[#a8bfae]">{footer.qrCaption}</span>
        </div>
      )}
    </div>
  )
}

export function FooterCta() {
  const { footer, hero, langLink } = useContent()
  return (
    <div
      id="download"
      className="mt-[clamp(56px,8vw,96px)] bg-forest px-5 py-[clamp(44px,6.5vw,76px)] text-center md:px-12"
    >
      <FadeIn>
        <h2 className="text-[clamp(24px,3.6vw,42px)] leading-[1.45] font-black text-white">
          {footer.heading[0]}
          <br />
          {footer.heading[1]}
        </h2>
        <p className="mt-4 text-[clamp(13px,1.3vw,15px)] text-[#a8bfae]">
          {footer.sub}
        </p>
        <div className="mt-[clamp(20px,2.6vw,30px)] flex flex-wrap justify-center gap-2.5 md:gap-10">
          {/* 320px 幅でも2つ横に並ぶよう、md 未満は間を詰める（Apple の余白規定は狭い場合バッジ高の 1/10） */}
          <StoreColumn
            badge={<AppStoreBadge className="h-11 md:h-[52px]" />}
            qr={qrAppStore}
            store="App Store"
          />
          <StoreColumn
            badge={<GooglePlayBadge className="h-11 md:h-[52px]" />}
            qr={qrGooglePlay}
            store="Google Play"
          />
        </div>
        {!IS_RELEASED && (
          <p className="mt-4 text-[13px] text-[#a8bfae]">
            {hero.followBefore}{' '}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white underline hover:text-white"
            >
              Instagram
            </a>{' '}
            {hero.followAfter}
          </p>
        )}
        <div className="mt-[clamp(30px,4.5vw,52px)] flex flex-wrap justify-center gap-[clamp(14px,2.4vw,28px)] text-[clamp(11px,1.1vw,12.5px)] text-[#7d9484]">
          {footer.legalLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[#7d9484] hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href={langLink.href}
            hrefLang={langLink.hrefLang}
            lang={langLink.hrefLang}
            className="text-[#7d9484] hover:text-white"
          >
            {langLink.label}
          </a>
          <span className="text-[#5d7565]">© 2026 Shot AI Trace</span>
        </div>
        {/* 公式バッジの利用条件にある商標表記（サイト内に1回）。Apple は各言語の所定書式に従う */}
        <p className="mx-auto mt-4 max-w-[640px] text-[10.5px] leading-[1.7] text-[#5d7565]">
          {footer.trademarks.join('')}
        </p>
      </FadeIn>
    </div>
  )
}
