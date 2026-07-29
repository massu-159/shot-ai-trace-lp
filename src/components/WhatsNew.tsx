import appLandscape from '../assets/app-landscape.webp'
import { WHATS_NEW_VERSION, whatsNewItems } from '../data/whatsNew'
import { FadeIn } from './FadeIn'

/** v1.2 新機能セクション。スクショ1枚（横動画＋ルーペが写った編集画面）で2機能を訴求する。 */
export function WhatsNew() {
  return (
    <div id="whatsnew" className="mx-auto max-w-content pt-[clamp(56px,8vw,88px)]">
      <FadeIn>
        <div className="px-5 text-center md:px-12">
          <div className="font-display text-[clamp(11px,1vw,12px)] font-semibold tracking-[0.16em] text-primary">
            WHAT&apos;S NEW
          </div>
          <h2 className="mt-3.5 text-[clamp(24px,3.3vw,38px)] leading-[1.45] font-black text-ink">
            アップデートで、さらに使いやすく。
            <span className="ml-3 inline-block translate-y-[-2px] rounded-full bg-mint px-3 py-[5px] align-middle text-[13px] font-bold text-primary">
              {WHATS_NEW_VERSION}
            </span>
          </h2>
        </div>

        {/* PC: スクショ + 機能リストの2カラム */}
        <div className="hidden items-center gap-14 px-12 pt-11 md:grid md:grid-cols-[300px_1fr]">
          <img
            src={appLandscape}
            alt="横動画に弾道線と拡大ルーペを表示した編集画面"
            className="block w-[264px] justify-self-center rounded-[48px] shadow-[0_24px_48px_rgba(20,32,26,0.25)]"
          />
          <div className="flex max-w-[560px] flex-col gap-8">
            {whatsNewItems.map((item) => (
              <div key={item.title}>
                <div className="inline-block rounded-lg bg-mint px-3 py-[5px] text-[13px] font-bold text-primary">
                  NEW
                </div>
                <div className="mt-3 text-[18px] leading-[1.6] font-bold text-ink">
                  {item.title}
                </div>
                <p className="mt-2 text-[13.5px] leading-[1.8] text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* モバイル: スクショ → リストの縦積み */}
        <div className="px-5 pt-6 md:hidden">
          <img
            src={appLandscape}
            alt="横動画に弾道線と拡大ルーペを表示した編集画面"
            className="mx-auto block w-[180px] rounded-[28px] shadow-[0_18px_36px_rgba(20,32,26,0.25)]"
          />
          <div className="mt-6 flex flex-col overflow-hidden rounded-2xl border border-line">
            {whatsNewItems.map((item, i) => (
              <div
                key={item.title}
                className={`flex flex-col gap-[5px] px-5 py-[18px] ${
                  i < whatsNewItems.length - 1 ? 'border-b border-line-soft' : ''
                }`}
              >
                <span className="text-[11.5px] font-semibold text-primary">NEW</span>
                <span className="text-[13.5px] font-bold text-ink">{item.title}</span>
                <p className="text-[12.5px] leading-[1.7] text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
