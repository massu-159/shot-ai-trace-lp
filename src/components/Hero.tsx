import { INSTAGRAM_URL, IS_RELEASED } from '../constants'
import { useContent } from '../content'
import { AppStoreBadge } from './AppStoreBadge'
import { GooglePlayBadge } from './GooglePlayBadge'
import { Header } from './Header'

export function Hero() {
  const { lang, hero } = useContent()
  return (
    <div className="bg-[linear-gradient(180deg,#fbfdfb_0%,#f1f6f1_100%)]">
      {/* 背景は全幅のまま、各行のコンテンツは max-w-content（デザイン照合済みの 1280px）に制限 */}
      <Header />
      <div className="mx-auto grid max-w-content grid-cols-1 gap-0 pt-5 md:grid-cols-[1fr_460px] md:items-center md:gap-10 md:px-12 md:pt-9 md:pb-[72px]">
        <div className="px-5 text-center md:px-0 md:text-left">
          <div className="hidden gap-2 md:flex">
            {hero.snsBadges.map((label) => (
              <span
                key={label}
                className="rounded-full border border-[#d9e2da] bg-white px-3 py-[5px] font-display text-[11px] font-semibold tracking-[0.08em] text-muted"
              >
                {label}
              </span>
            ))}
          </div>
          {/* 英語は語が長いため、スマホ幅で1行に収まるよう小さめにする */}
          <h1
            className={`mt-6 ${
              lang === 'en' ? 'text-[clamp(52px,7vw,88px)]' : 'text-[clamp(64px,8vw,96px)]'
            } leading-[1.15] font-black tracking-[0.01em] text-ink`}
          >
            {hero.title[0]}
            <br />
            <span className="text-primary">{hero.title[1]}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[480px] text-[clamp(13px,1.4vw,16px)] leading-[1.9] text-pretty text-muted md:mx-0">
            {hero.lead}
          </p>
          <div className="mt-[26px] hidden flex-col gap-3 md:flex">
            {hero.checkPoints.map((text) => (
              <div key={text} className="flex items-center gap-[10px]">
                <span className="inline-flex size-[18px] items-center justify-center rounded-full bg-mint text-[11px] font-black text-primary">
                  ✓
                </span>
                <span className="text-[14.5px] font-medium text-moss">{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 hidden flex-wrap items-center gap-4 md:flex">
            <AppStoreBadge className="h-[52px]" />
            <GooglePlayBadge className="h-[52px]" />
            <a
              href="#pricing"
              className="inline-flex items-center rounded-[14px] border-[1.5px] border-ink px-6 py-[15px] text-[14px] font-bold text-ink hover:text-ink"
            >
              {hero.seePricing}
            </a>
          </div>
          {/* リリース前のみ: フォロー導線（リリース後は DL 導線に集約する） */}
          {!IS_RELEASED && (
            <p className="mt-4 hidden text-[13px] text-muted md:block">
              {hero.followBefore}{' '}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
              >
                Instagram
              </a>{' '}
              {hero.followAfter}
            </p>
          )}
        </div>

        {/* PC版ビジュアル */}
        <div className="relative hidden h-[600px] md:block">
          <img
            src={hero.previewImage}
            alt={hero.previewAlt}
            className="absolute top-11 left-0 block w-[264px] -rotate-4 rounded-[48px] shadow-[0_24px_48px_rgba(20,32,26,0.25)]"
          />
          <img
            src={hero.homeImage}
            alt={hero.homeAlt}
            className="absolute top-0 right-[6px] block w-[280px] rotate-3 rounded-[48px] shadow-[0_30px_60px_rgba(20,32,26,0.32)]"
          />
        </div>

        {/* モバイル版ビジュアル（フェード＋バッジ重ね） */}
        <div className="relative mt-[22px] h-[400px] overflow-hidden md:hidden">
          <img
            src={hero.previewImage}
            alt={hero.previewAlt}
            className="absolute top-9 left-[46px] block w-[150px] -rotate-5 rounded-[22px] shadow-[0_18px_36px_rgba(20,32,26,0.25)]"
          />
          {/* rotate-4 で上端が持ち上がるため、overflow-hidden に切られない分の余白を上に取る */}
          <img
            src={hero.homeImage}
            alt={hero.homeAlt}
            className="absolute top-2 right-[52px] block w-[172px] rotate-4 rounded-[22px] shadow-[0_20px_44px_rgba(20,32,26,0.3)]"
          />
          <div className="absolute right-0 bottom-0 left-0 h-[120px] bg-[linear-gradient(180deg,rgba(241,246,241,0)_0%,#f1f6f1_78%)]" />
          <div className="absolute right-0 bottom-4 left-0 flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
            {!IS_RELEASED && (
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-bold text-moss underline"
              >
                {hero.followMobile}
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-1.5 px-5 pt-3.5 pb-6 md:hidden">
        {hero.mobileChips.map((label) => (
          <span
            key={label}
            className="rounded-full bg-mint px-3 py-[5px] text-[11px] font-semibold text-primary"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
