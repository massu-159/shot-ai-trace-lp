import { APP_STORE_URL } from '../constants'
import { plans } from '../data/plans'
import { FadeIn } from './FadeIn'

export function Pricing() {
  return (
    <div id="pricing" className="mx-auto max-w-content pt-[clamp(56px,8vw,96px)]">
      <FadeIn>
        <div className="px-5 text-center md:px-12">
          <div className="font-display text-[clamp(11px,1vw,12px)] font-semibold tracking-[0.16em] text-primary">
            PRICING
          </div>
          <h2 className="mt-3.5 text-[clamp(24px,3.3vw,38px)] leading-[1.45] font-black text-ink">
            シンプルな3プラン。機能差はありません。
          </h2>
          <p className="mt-3 text-[clamp(12.5px,1.3vw,14.5px)] text-muted">
            違いは書き出し回数だけ。まずは無料で5回試してください。
          </p>
        </div>

        {/* PC: 3カード */}
        <div className="hidden grid-cols-3 items-stretch gap-6 px-12 pt-11 md:grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[20px] p-8 ${
                plan.recommended ? 'border-2 border-primary bg-plan' : 'border border-line'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 rounded-full bg-primary px-3.5 py-[5px] text-[11.5px] font-bold tracking-[0.04em] text-white">
                  {plan.badge}
                </div>
              )}
              <div className="text-[15px] font-bold text-ink">{plan.name}</div>
              <div className="mt-3.5">
                <span
                  className={`font-display text-[40px] font-bold ${
                    plan.recommended ? 'text-primary' : 'text-ink'
                  }`}
                >
                  {plan.price}
                </span>
                {plan.priceSuffix && (
                  <span className="text-[15px] font-medium text-muted">{plan.priceSuffix}</span>
                )}
              </div>
              <div className="mt-1 text-[13.5px] text-muted">{plan.priceNote}</div>
              <div className={`my-[22px] h-px ${plan.recommended ? 'bg-[#d8e6da]' : 'bg-line'}`} />
              <div className="flex flex-col gap-2.5 text-[13.5px] text-moss">
                {plan.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a
                href={APP_STORE_URL}
                className={`mt-7 inline-flex justify-center rounded-xl text-[14px] font-bold ${
                  plan.recommended
                    ? 'bg-primary py-3.5 text-white hover:text-white'
                    : 'border-[1.5px] border-ink py-[13px] text-ink hover:text-ink'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* モバイル: 行リスト */}
        <div className="px-5 pt-5 md:hidden">
          <div className="flex flex-col overflow-hidden rounded-2xl border border-line">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`flex items-center justify-between px-5 py-4 ${
                  plan.recommended ? 'bg-plan' : ''
                } ${i < plans.length - 1 ? 'border-b border-line-soft' : ''}`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[13.5px] font-bold text-ink">{plan.name}</span>
                    {plan.mobileBadge && (
                      <span className="rounded-full bg-primary px-2 py-0.5 text-[9.5px] font-bold text-white">
                        {plan.mobileBadge}
                      </span>
                    )}
                  </div>
                  <div className="mt-0.5 text-[11.5px] text-muted">{plan.mobileNote}</div>
                </div>
                <span
                  className={`font-display text-[20px] font-bold ${
                    plan.recommended ? 'text-primary' : 'text-ink'
                  }`}
                >
                  {plan.price}
                  {plan.priceSuffix && (
                    <span className="text-[11px] font-medium text-muted">{plan.priceSuffix}</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-5 px-5 text-center text-[clamp(10.5px,1.1vw,12px)] leading-[1.7] text-[#8a938c] md:px-12">
          価格はApp Storeの表示に準拠します。サブスクリプションは自動更新され、App Storeの設定からいつでも解約できます。
        </p>
      </FadeIn>
    </div>
  )
}
