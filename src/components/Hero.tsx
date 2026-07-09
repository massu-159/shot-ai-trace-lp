import appHome from '../assets/app-home.png'
import { AppStoreBadge } from './AppStoreBadge'
import { Header } from './Header'

const snsBadges = ['Instagram Reels', 'TikTok', 'YouTube Shorts']

const checkPoints = [
  '打球音ベースのAI解析で、トレースが外れにくい',
  '端末内解析。アップロード待ちゼロ、動画は外に出ない',
  '無料5回・月¥300・買い切り¥3,000。サブスク強制なし',
]

const mobileChips = ['打球音AI検出', '端末内解析', '無料5回']

export function Hero() {
  return (
    <div className="bg-[linear-gradient(180deg,#fbfdfb_0%,#f1f6f1_100%)]">
      <Header />
      <div className="grid grid-cols-1 gap-0 pt-5 md:grid-cols-[1fr_460px] md:items-center md:gap-10 md:px-12 md:pt-9 md:pb-[72px]">
        <div className="px-5 text-center md:px-0 md:text-left">
          <div className="hidden gap-2 md:flex">
            {snsBadges.map((label) => (
              <span
                key={label}
                className="rounded-full border border-[#d9e2da] bg-white px-3 py-[5px] font-display text-[11px] font-semibold tracking-[0.08em] text-muted"
              >
                {label}
              </span>
            ))}
          </div>
          <h1 className="mt-6 text-[clamp(40px,6.5vw,76px)] leading-[1.2] font-black tracking-[0.01em] text-ink">
            弾道が、
            <br />
            <span className="text-primary">見える。</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[480px] text-[clamp(13px,1.4vw,16px)] leading-[1.9] text-pretty text-muted md:mx-0">
            撮った縦動画を選ぶだけで、AIが打球音からインパクトを検出し、弾道線を自動で描画。そのままの画角・そのままの画質でSNSに投稿できます。
          </p>
          <div className="mt-[26px] hidden flex-col gap-3 md:flex">
            {checkPoints.map((text) => (
              <div key={text} className="flex items-center gap-[10px]">
                <span className="inline-flex size-[18px] items-center justify-center rounded-full bg-mint text-[11px] font-black text-primary">
                  ✓
                </span>
                <span className="text-[14.5px] font-medium text-moss">{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 hidden items-center gap-4 md:flex">
            <AppStoreBadge variant="dark" />
            <a
              href="#pricing"
              className="inline-flex items-center rounded-[14px] border-[1.5px] border-ink px-6 py-[15px] text-[14px] font-bold text-ink hover:text-ink"
            >
              料金を見る
            </a>
          </div>
        </div>

        {/* PC版ビジュアル */}
        <div className="relative hidden h-[600px] md:block">
          <div className="absolute top-11 left-0 h-[492px] w-[264px] -rotate-4 overflow-hidden rounded-[32px] bg-[repeating-linear-gradient(45deg,#16241a_0_12px,#1c2c20_12px_24px)] shadow-[0_24px_48px_rgba(20,32,26,0.25)]">
            <svg viewBox="0 0 264 492" className="absolute inset-0 h-full w-full">
              <path d="M132 452 C 132 300 132 130 208 92" stroke="#00E676" strokeWidth="3.5" fill="none" />
              <circle cx="208" cy="92" r="6" fill="#00E676" />
            </svg>
            <div className="absolute right-0 bottom-[18px] left-0 text-center font-mono text-[10.5px] tracking-[0.06em] text-[#9fb8a5]">
              書き出し動画（弾道線入り・9:16）
            </div>
          </div>
          <img
            src={appHome}
            alt="Shot AI Trace ホーム画面"
            className="absolute top-0 right-[6px] block w-[280px] rotate-3 rounded-[34px] shadow-[0_30px_60px_rgba(20,32,26,0.32)]"
          />
        </div>

        {/* モバイル版ビジュアル（フェード＋バッジ重ね） */}
        <div className="relative mt-[22px] h-[400px] overflow-hidden md:hidden">
          <div className="absolute top-9 left-[46px] h-[280px] w-[150px] -rotate-5 overflow-hidden rounded-[22px] bg-[repeating-linear-gradient(45deg,#16241a_0_10px,#1c2c20_10px_20px)] shadow-[0_18px_36px_rgba(20,32,26,0.25)]">
            <svg viewBox="0 0 150 280" className="absolute inset-0 h-full w-full">
              <path d="M75 256 C 75 170 75 76 118 54" stroke="#00E676" strokeWidth="2.5" fill="none" />
              <circle cx="118" cy="54" r="4" fill="#00E676" />
            </svg>
            <div className="absolute right-0 bottom-[10px] left-0 text-center font-mono text-[8px] text-[#9fb8a5]">
              書き出し動画（9:16）
            </div>
          </div>
          <img
            src={appHome}
            alt="Shot AI Trace ホーム画面"
            className="absolute top-0 right-[52px] block w-[172px] rotate-4 rounded-[22px] shadow-[0_20px_44px_rgba(20,32,26,0.3)]"
          />
          <div className="absolute right-0 bottom-0 left-0 h-[120px] bg-[linear-gradient(180deg,rgba(241,246,241,0)_0%,#f1f6f1_78%)]" />
          <div className="absolute right-0 bottom-4 left-0 flex justify-center">
            <AppStoreBadge
              variant="dark"
              className="px-[30px] shadow-[0_12px_28px_rgba(20,32,26,0.3)]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-1.5 px-5 pt-3.5 pb-6 md:hidden">
        {mobileChips.map((label) => (
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
