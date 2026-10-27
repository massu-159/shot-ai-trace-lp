import { INSTAGRAM_URL, IS_RELEASED, storeForUserAgent } from '../constants'
import { useContent } from '../content'

// モバイルのみ: 下部固定CTAバー（スペーサ込み）。
// リリース前は Coming Soon 表示＋Instagram フォロー導線に切り替える。
// ボタンは閲覧端末に合わせて Google Play（Android）／App Store（それ以外）へ出し分ける。
export function MobileCtaBar() {
  const { store: labels, mobileCta } = useContent()
  const store = storeForUserAgent(navigator.userAgent, {
    appStore: labels.appStoreCta,
    googlePlay: labels.googlePlayCta,
  })
  return (
    <>
      <div className="h-[88px] bg-forest md:hidden" />
      <div className="fixed right-3 bottom-3.5 left-3 z-50 md:hidden">
        <div className="flex items-center justify-between rounded-[18px] bg-white py-3 pr-3.5 pl-[18px] shadow-[0_16px_36px_rgba(0,0,0,0.35)]">
          {IS_RELEASED ? (
            <>
              <div className="text-left">
                <div className="text-[12.5px] font-bold text-ink">{mobileCta.title}</div>
                <div className="text-[10.5px] text-muted">{mobileCta.sub}</div>
              </div>
              <a
                href={store.url}
                className="inline-flex items-center rounded-xl bg-primary px-[18px] py-[11px] text-[13px] font-bold text-white hover:text-white"
              >
                {store.label}
              </a>
            </>
          ) : (
            <>
              <div className="text-left">
                <div className="text-[12.5px] font-bold text-ink">{labels.comingSoonLong}</div>
                <div className="text-[10.5px] text-muted">{mobileCta.comingSoonSub}</div>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-primary px-[18px] py-[11px] text-[13px] font-bold text-white hover:text-white"
              >
                Instagram
              </a>
            </>
          )}
        </div>
      </div>
    </>
  )
}
