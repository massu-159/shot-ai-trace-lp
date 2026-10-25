import type { Plan } from '../types'

// 英語版は国ごとに価格が違うため、金額を書かない（価格は各ストアの表示を案内する）。
// 大きな数字の欄には、プランの差である保存できる本数を出す。
export const plans: Plan[] = [
  {
    name: 'Free',
    price: '5',
    priceSuffix: ' saves',
    priceNote: 'Free forever',
    items: ['• Every feature included', '• No sign-up needed', '• Start right away'],
    cta: 'Start free',
    mobileNote: 'Free forever · No sign-up',
  },
  {
    name: 'Lifetime',
    price: 'Unlimited',
    priceNote: 'One-time payment',
    items: [
      '• Unlimited saves',
      '• No monthly fee',
      '• Restore on your other devices using the same store',
    ],
    cta: 'Get Lifetime',
    recommended: true,
    badge: 'Recommended',
    mobileNote: 'One-time payment · No monthly fee',
    mobileBadge: 'Recommended',
  },
  {
    name: 'Monthly',
    price: '10',
    priceSuffix: ' saves/mo',
    priceNote: 'For lighter use',
    items: ['• 10 saves per month', '• Cancel anytime', '• Used after your free saves'],
    cta: 'Start Monthly',
    mobileNote: 'Billed monthly · Cancel anytime',
  },
]
