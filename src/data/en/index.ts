import badgeAppStore from '../../assets/badge-app-store-en.svg'
import badgeGooglePlay from '../../assets/badge-google-play-en.png'
import { WHATS_NEW_VERSION } from '../ja/whatsNew'
import type { Content } from '../types'
import { faqs } from './faqs'
import { features } from './features'
import { plans } from './plans'
import { steps } from './steps'
import { whatsNewItems } from './whatsNew'

/**
 * 英語のトップページ（/en/）の文言。日本語版（../ja/index.ts）と同じ構成にする。
 * 用語はアプリの英語版にそろえる（Save・saves left・Filming tips・Lifetime / Monthly・
 * Camera Roll / Gallery・Shot shape: Curves right / Curves left）。
 * 価格は国ごとに違うため金額を書かず、各ストアの表示を案内する。
 */
export const en: Content = {
  lang: 'en',
  langLink: { href: '../', label: '日本語', hrefLang: 'ja' },
  store: {
    // App Store 公式バッジ（US-UK・黒。developer.apple.com の配布物のまま）／
    // Google Play 公式バッジ（en_badge_web_generic。play.google.com の配布物のまま）
    appStoreBadge: badgeAppStore,
    appStoreAlt: 'Download on the App Store',
    googlePlayBadge: badgeGooglePlay,
    googlePlayAlt: 'Get it on Google Play',
    // 646×250 の四方に余白（見えるのは x41〜604・y41〜208 の 564×168）。リンクを見える部分の
    // 縦横比にし、画像を 646/564 倍の幅で左上へずらしてはみ出させる。
    googlePlayLinkClass: 'relative aspect-[564/168]',
    googlePlayImgClass: 'absolute top-[-24.4%] left-[-7.27%] w-[114.54%] max-w-none',
    appStoreCta: 'Get it on the App Store',
    googlePlayCta: 'Get it on Google Play',
    comingSoon: 'Coming soon',
    comingSoonLong: 'Coming Soon',
  },
  header: {
    nav: [
      { href: '#features', label: 'Features' },
      { href: '#howto', label: 'How it works' },
      { href: '#pricing', label: 'Pricing' },
      { href: '#faq', label: 'FAQ' },
    ],
    getApp: 'Get the app',
  },
  hero: {
    snsBadges: ['Instagram Reels', 'TikTok', 'YouTube Shorts'],
    title: ['See your', 'ball flight.'],
    lead: 'Just pick a video you’ve shot. AI finds the moment of impact from the sound of the strike and draws the ball-flight trace for you. Post it to social media at the original framing and quality.',
    checkPoints: [
      'AI listens for impact, so the trace stays on the ball',
      'Analyzed on your device. No upload wait, and your video stays on your phone',
      '5 free saves, then Monthly or Lifetime',
    ],
    mobileChips: ['Impact from sound', 'On-device', '5 free saves'],
    seePricing: 'See pricing',
    previewAlt: 'Preview screen with a ball-flight trace drawn',
    homeAlt: 'Shot AI Trace home screen',
    followBefore: 'Get updates on',
    followAfter: '',
    followMobile: 'Get updates on Instagram',
  },
  updateBanner: 'Now supports videos up to 60 seconds →',
  features: {
    heading: ['Common shot tracer frustrations,', 'solved by design.'],
    items: features,
  },
  whatsNew: {
    heading: 'Updated and easier to use.',
    version: WHATS_NEW_VERSION,
    demoAlt: 'Playback of a saved video with the ball-flight trace extending from the struck ball',
    items: whatsNewItems,
  },
  howTo: {
    heading: 'Three simple steps.',
    steps,
    dotLabel: (n) => `Show step ${n}`,
  },
  pricing: {
    heading: 'Three simple plans. Same features on every one.',
    sub: 'The only difference is how many videos you can save. Start with 5 free saves.',
    plans,
    note: 'Prices vary by country. See the App Store or Google Play for the price in your country. The subscription renews automatically and can be canceled anytime in your App Store or Google Play subscription settings.',
  },
  faq: {
    heading: 'Frequently asked questions',
    items: faqs,
  },
  footer: {
    heading: ['From your next round,', 'keep every ball flight.'],
    sub: 'Your first 5 saves are free. No sign-up required.',
    qrAlt: (store) => `QR code for the ${store} download page`,
    qrCaption: 'Scan with your phone',
    legalLinks: [
      { href: 'terms.html', label: 'Terms of Use' },
      { href: 'privacy.html', label: 'Privacy Policy' },
      // 特定商取引法に基づく表記は日本の法律の表示のため日本語版のみ
      { href: '../tokushoho.html', label: 'Legal notice (Japanese)' },
    ],
    trademarks: [
      'Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries and regions. ',
      'App Store is a service mark of Apple Inc. ',
      'Google Play and the Google Play logo are trademarks of Google LLC.',
    ],
  },
  mobileCta: {
    title: 'Try 5 saves free',
    sub: 'No sign-up · Every feature',
    comingSoonSub: 'Get updates on Instagram',
  },
}
