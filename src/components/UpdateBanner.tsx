/** Hero 直下の新機能告知帯。タップで新機能セクション（#whatsnew）へスクロールする。 */
export function UpdateBanner() {
  return (
    <a
      href="#whatsnew"
      className="flex items-center justify-center gap-2.5 bg-mint px-5 py-2.5 hover:opacity-90"
    >
      <span className="rounded-full bg-primary px-2.5 py-[3px] text-[10px] font-black tracking-[0.08em] text-white">
        NEW
      </span>
      <span className="text-[13px] font-bold text-primary">
        横動画対応＆拡大ルーペを追加しました →
      </span>
    </a>
  )
}
