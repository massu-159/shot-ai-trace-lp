import { INSTAGRAM_URL, IS_RELEASED } from '../constants'
import { AppStoreBadge } from './AppStoreBadge'
import { FadeIn } from './FadeIn'

const legalLinks = [
  { href: 'terms.html', label: '利用規約' },
  { href: 'privacy.html', label: 'プライバシーポリシー' },
  { href: 'tokushoho.html', label: '特定商取引法に基づく表記' },
]

export function FooterCta() {
  return (
    <div className="mt-[clamp(56px,8vw,96px)] bg-forest px-5 py-[clamp(44px,6.5vw,76px)] text-center md:px-12">
      <FadeIn>
        <h2 className="text-[clamp(24px,3.6vw,42px)] leading-[1.45] font-black text-white">
          次のラウンドから、
          <br />
          弾道を残そう。
        </h2>
        <p className="mt-4 text-[clamp(13px,1.3vw,15px)] text-[#a8bfae]">
          無料で5回書き出せます。登録は不要です。
        </p>
        <div className="mt-[clamp(20px,2.6vw,30px)] flex justify-center">
          <AppStoreBadge variant="light" />
        </div>
        {!IS_RELEASED && (
          <p className="mt-4 text-[13px] text-[#a8bfae]">
            最新情報は{' '}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white underline hover:text-white"
            >
              Instagram
            </a>{' '}
            で
          </p>
        )}
        <div className="mt-[clamp(30px,4.5vw,52px)] flex flex-wrap justify-center gap-[clamp(14px,2.4vw,28px)] text-[clamp(11px,1.1vw,12.5px)] text-[#7d9484]">
          {legalLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[#7d9484] hover:text-white">
              {link.label}
            </a>
          ))}
          <span className="text-[#5d7565]">© 2026 Shot AI Trace</span>
        </div>
      </FadeIn>
    </div>
  )
}
