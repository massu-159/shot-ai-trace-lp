import { steps } from '../data/steps'
import { FadeIn } from './FadeIn'

export function HowTo() {
  return (
    <div id="howto" className="pt-[clamp(56px,8vw,96px)]">
      <FadeIn>
        <div className="px-5 text-center md:px-12">
          <div className="font-display text-[clamp(11px,1vw,12px)] font-semibold tracking-[0.16em] text-primary">
            HOW IT WORKS
          </div>
          <div className="flex items-baseline justify-center gap-3">
            <h2 className="mt-3.5 text-[clamp(24px,3.3vw,38px)] font-black text-ink">
              使い方は、3ステップ。
            </h2>
            <span className="font-mono text-[10px] text-[#8a938c] md:hidden">← スワイプ</span>
          </div>
        </div>
        <div className="mt-[clamp(20px,4vw,44px)] flex gap-3 overflow-x-auto px-5 pb-1.5 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-12 md:pb-0">
          {steps.map((step) => (
            <div
              key={step.label}
              className="w-60 flex-none rounded-[18px] bg-step p-[clamp(20px,2.5vw,30px)] md:w-auto"
            >
              <div className="font-display text-[clamp(12px,1.2vw,14px)] font-bold text-primary">
                {step.label}
              </div>
              <div className="mt-2.5 text-[clamp(15.5px,1.6vw,19px)] font-bold text-ink">
                {step.title}
              </div>
              <p className="mt-2 text-[clamp(12px,1.2vw,13.5px)] leading-[1.8] text-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  )
}
