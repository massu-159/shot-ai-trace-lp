export type Plan = {
  name: string
  price: string
  priceSuffix?: string
  priceNote: string
  items: string[]
  cta: string
  recommended?: boolean
  badge?: string
  mobileNote: string
  mobileBadge?: string
}

export const plans: Plan[] = [
  {
    name: '無料',
    price: '¥0',
    priceNote: 'ずっと無料',
    items: ['・書き出し 5回まで', '・全機能が使える', '・登録なしで今すぐ'],
    cta: '無料ではじめる',
    mobileNote: '書き出し5回まで・登録不要',
  },
  {
    name: '買い切り',
    price: '¥3,000',
    priceNote: '一度きりのお支払い',
    items: ['・書き出し 無制限', '・月額課金なし', '・他の端末へ購入を復元可能'],
    cta: '買い切りで購入',
    recommended: true,
    badge: 'おすすめ・買い切り',
    mobileNote: '無制限・月額なし',
    mobileBadge: 'おすすめ',
  },
  {
    name: 'サブスクリプション',
    price: '¥300',
    priceSuffix: '/月',
    priceNote: 'ライトに使いたい方へ',
    items: ['・書き出し 10回/月', '・いつでも解約OK', '・無料枠を使い切ってから消費'],
    cta: '月額ではじめる',
    mobileNote: '10回/月・いつでも解約',
  },
]
