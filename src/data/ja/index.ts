import appHome from '../../assets/app-home.webp'
import appPreview from '../../assets/app-preview.webp'
import badgeAppStore from '../../assets/badge-app-store-ja.svg'
import badgeGooglePlay from '../../assets/badge-google-play-ja.png'
import type { Content } from '../types'
import { faqs } from './faqs'
import { features } from './features'
import { plans } from './plans'
import { steps } from './steps'
import { WHATS_NEW_VERSION, whatsNewItems } from './whatsNew'

/** 日本語のトップページ（/）の文言。英語版は ../en/index.ts。 */
export const ja: Content = {
  lang: 'ja',
  langLink: { href: 'en/', label: 'English', hrefLang: 'en' },
  store: {
    // App Store 公式バッジ（日本語・黒）／Google Play 公式バッジ（日本語版「で手に入れよう」）
    appStoreBadge: badgeAppStore,
    appStoreAlt: 'App Store からダウンロード',
    googlePlayBadge: badgeGooglePlay,
    googlePlayAlt: 'Google Play で手に入れよう',
    // 646×250 の上下に 29px ずつ余白（見えるのは高さ 192px・左右は余白なし）→ 250/192 倍
    googlePlayLinkClass: 'items-center',
    googlePlayImgClass: 'h-[130.21%] w-auto max-w-none',
    appStoreCta: 'App Storeで入手',
    googlePlayCta: 'Google Playで入手',
    comingSoon: '近日公開',
    comingSoonLong: 'Coming Soon（近日公開）',
  },
  header: {
    nav: [
      { href: '#features', label: '機能' },
      { href: '#howto', label: '使い方' },
      { href: '#pricing', label: '料金' },
      { href: '#faq', label: 'FAQ' },
    ],
    getApp: 'アプリを入手',
  },
  hero: {
    snsBadges: ['Instagram Reels', 'TikTok', 'YouTube Shorts'],
    title: ['弾道が、', '見える。'],
    lead: '撮った動画を選ぶだけ。ボールのタップは不要で、AIが打球音からインパクトを見つけ、弾道線を自動で描きます。手持ちでカメラを振った動画もOK。最大4Kの元の画質のまま、SNSに投稿できます。',
    checkPoints: [
      'ボールのタップ不要。打球音からAIが自動で解析',
      '手持ちでパン・ズームしても、線が景色に付いてくる',
      '最大4K・HDRの元の画質のまま保存',
      '登録不要。無料5回・月¥300・買い切り¥3,000',
    ],
    mobileChips: ['タップ不要', '手持ちOK', '最大4K', '無料5回'],
    seePricing: '料金を見る',
    previewImage: appPreview,
    previewAlt: '弾道線を描画したプレビュー画面',
    homeImage: appHome,
    homeAlt: 'Shot AI Trace ホーム画面',
    followBefore: '最新情報は',
    followAfter: 'で',
    followMobile: '最新情報は Instagram で',
  },
  updateBanner: '60秒までの動画に対応しました →',
  features: {
    heading: ['ゴルフ弾道トレーサーアプリの「不満」を、', '設計から解決しました。'],
    items: features,
  },
  whatsNew: {
    heading: 'アップデートで、さらに使いやすく。',
    version: WHATS_NEW_VERSION,
    demoAlt: '打ったボールに弾道線が伸びていく、書き出した動画の再生画面',
    items: whatsNewItems,
  },
  howTo: {
    heading: '使い方は、3ステップ。',
    steps,
    dotLabel: (n) => `ステップ${n}を表示`,
  },
  pricing: {
    heading: 'シンプルな3プラン。機能差はありません。',
    sub: '違いは書き出し回数だけ。まずは無料で5回試してください。',
    plans,
    note: '価格は各ストア（App Store／Google Play）の表示に準拠します。サブスクリプションは自動更新され、App Store のサブスクリプション設定または Google Play の定期購入設定からいつでも解約できます。',
  },
  faq: {
    heading: 'よくある質問',
    items: faqs,
  },
  footer: {
    heading: ['次のラウンドから、', '弾道を残そう。'],
    sub: '無料で5回書き出せます。登録は不要です。',
    qrAlt: (store) => `${store} のダウンロードページの QR コード`,
    qrCaption: 'スマホで読み取り',
    legalLinks: [
      { href: 'terms.html', label: '利用規約' },
      { href: 'privacy.html', label: 'プライバシーポリシー' },
      { href: 'tokushoho.html', label: '特定商取引法に基づく表記' },
    ],
    // 公式バッジの利用条件にある商標表記（サイト内に1回）。Apple は日本向けの所定書式に従う
    trademarks: [
      'Apple、Appleのロゴは、米国およびその他の国で登録されたApple Inc.の商標です。',
      'App Store は Apple Inc. のサービスマークです。',
      'Google Play および Google Play ロゴは Google LLC の商標です。',
    ],
  },
  mobileCta: {
    title: '無料で5回試せます',
    sub: '登録不要・機能制限なし',
    comingSoonSub: '最新情報は Instagram で',
  },
}
