import { faqs } from '../data/faqs'
import { FadeIn } from './FadeIn'

export function Faq() {
  return (
    <div id="faq" className="mx-auto box-border max-w-[820px] px-5 pt-[clamp(56px,8vw,96px)] md:px-12">
      <FadeIn>
        <div className="text-center">
          <div className="font-display text-[clamp(11px,1vw,12px)] font-semibold tracking-[0.16em] text-primary">
            FAQ
          </div>
          <h2 className="mt-3.5 text-[clamp(24px,3.3vw,38px)] font-black text-ink">よくある質問</h2>
        </div>
        <div className="mt-[clamp(22px,3.5vw,40px)] flex flex-col gap-3.5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-line px-[clamp(18px,2.3vw,26px)] py-[clamp(16px,2vw,22px)]"
            >
              <div className="text-[clamp(13.5px,1.4vw,15.5px)] font-bold text-ink">
                {faq.question}
              </div>
              <p className="mt-2 text-[clamp(12px,1.2vw,13.5px)] leading-[1.9] text-muted">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  )
}
