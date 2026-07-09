import { APP_STORE_URL } from '../constants'

// モバイルのみ: 下部固定CTAバー（スペーサ込み）
export function MobileCtaBar() {
  return (
    <>
      <div className="h-[88px] bg-forest md:hidden" />
      <div className="fixed right-3 bottom-3.5 left-3 z-50 md:hidden">
        <div className="flex items-center justify-between rounded-[18px] bg-white py-3 pr-3.5 pl-[18px] shadow-[0_16px_36px_rgba(0,0,0,0.35)]">
          <div className="text-left">
            <div className="text-[12.5px] font-bold text-ink">無料で5回試せます</div>
            <div className="text-[10.5px] text-muted">登録不要・機能制限なし</div>
          </div>
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center rounded-xl bg-primary px-[18px] py-[11px] text-[13px] font-bold text-white hover:text-white"
          >
            App Storeで入手
          </a>
        </div>
      </div>
    </>
  )
}
