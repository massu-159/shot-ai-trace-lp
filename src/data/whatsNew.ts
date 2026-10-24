export type WhatsNewItem = {
  title: string
  body: string
}

/** 新機能セクションと告知バナーが参照するアプリバージョン表記。 */
export const WHATS_NEW_VERSION = 'v1.3'

export const whatsNewItems: WhatsNewItem[] = [
  {
    title: 'Android 版をリリース',
    body: 'Google Play で Android 版の配信を開始しました。iPhone 版と同じ機能・同じ料金プランで使えます（購入はストアごとのため、iPhone 版での購入は引き継がれません）。',
  },
  {
    title: '続きから編集できる',
    body: '編集中の作業を残すようにしました。アプリが閉じられても、次に開いたときに続きから編集できます。',
  },
  {
    title: '解析が速く、途中でキャンセルも',
    body: '解析にかかる時間を短くしました。動画を選び間違えたときは、解析の途中でキャンセルできます。',
  },
  {
    title: '撮影のコツをアプリで確認',
    body: 'うまく解析できる撮り方を、ホーム画面の「撮影のコツ」からいつでも見られるようにしました。',
  },
  {
    title: '保存したら、そのまま共有',
    body: '保存のあと、そのまま SNS に共有したり、続けて編集したりできるようになりました。',
  },
]
