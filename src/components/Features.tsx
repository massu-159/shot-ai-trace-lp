import { features } from '../data/features'
import { FadeIn } from './FadeIn'

export function Features() {
  return (
    <div id="features" className="pt-[clamp(56px,8vw,88px)]">
      <FadeIn>
        <div className="px-5 text-center md:px-12">
          <div className="font-display text-[clamp(11px,1vw,12px)] font-semibold tracking-[0.16em] text-primary">
            WHY SHOT AI TRACE
          </div>
          <h2 className="mt-3.5 text-[clamp(24px,3.3vw,38px)] leading-[1.45] font-black text-ink">
            ゴルフ弾道トレーサーアプリの「不満」を、
            <br />
            設計から解決しました。
          </h2>
        </div>

        {/* PC: 3カード */}
        <div className="hidden grid-cols-3 gap-6 px-12 pt-11 md:grid">
          {features.map((f) => (
            <div key={f.complaint} className="rounded-[18px] border border-line bg-card p-7">
              <div className="inline-block rounded-lg bg-clay-soft px-3 py-[5px] text-[13px] font-bold text-clay">
                {f.complaint}
              </div>
              <div className="mt-4 text-[18px] leading-[1.6] font-bold text-ink">
                {f.headline[0]}
                <br />
                {f.headline[1]}
              </div>
              <p className="mt-2.5 text-[13.5px] leading-[1.8] text-muted">{f.body}</p>
            </div>
          ))}
        </div>

        {/* モバイル: コンパクトリスト */}
        <div className="px-5 pt-5 md:hidden">
          <div className="flex flex-col overflow-hidden rounded-2xl border border-line">
            {features.map((f, i) => (
              <div
                key={f.mobileComplaint}
                className={`flex flex-col gap-[5px] px-5 py-[18px] ${
                  i < features.length - 1 ? 'border-b border-line-soft' : ''
                }`}
              >
                <span className="text-[11.5px] font-semibold text-clay">{f.mobileComplaint}</span>
                <span className="text-[13.5px] font-bold text-ink">{f.mobileAnswer}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
