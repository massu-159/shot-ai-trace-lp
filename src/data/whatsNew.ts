export type WhatsNewItem = {
  title: string
  body: string
}

/** 新機能セクションと告知バナーが参照するアプリバージョン表記。 */
export const WHATS_NEW_VERSION = 'v1.2'

export const whatsNewItems: WhatsNewItem[] = [
  {
    title: '横向き動画に対応',
    body: '縦だけでなく、横向きで撮影したスイング動画もそのまま解析・編集・書き出しできるようになりました。',
  },
  {
    title: '編集中の拡大ルーペ',
    body: '弾道のポイントを指で掴むと、指の近くに拡大ルーペを表示。指で隠れがちな着弾位置を確認しながら、細かく調整できます。',
  },
]
