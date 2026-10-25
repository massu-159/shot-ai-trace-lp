export type Faq = {
  question: string
  answer: string
}

export type Feature = {
  complaint: string
  headline: [string, string]
  body: string
  mobileComplaint: string
  mobileAnswer: string
}

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

export type Step = {
  label: string
  title: string
  body: string
}

export type WhatsNewItem = {
  title: string
  body: string
}

export type Lang = 'ja' | 'en'

export type NavLink = {
  href: string
  label: string
}

/** 言語切替リンク（もう一方の言語の同じページへ）。 */
export type LangLink = {
  href: string
  /** 切替先の言語で書いたラベル（例: 「English」「日本語」） */
  label: string
  hrefLang: Lang
}

/** トップページの文言一式。言語ごとに ja/index.ts・en/index.ts で用意する。 */
export type Content = {
  lang: Lang
  langLink: LangLink
  store: {
    appStoreBadge: string
    appStoreAlt: string
    googlePlayBadge: string
    googlePlayAlt: string
    /**
     * Google Play バッジの画像は言語ごとに透明な余白が違うため、リンク（＝見えるバッジ）と
     * 画像の当て方を言語ごとに持つ（GooglePlayBadge.tsx 参照）。
     */
    googlePlayLinkClass: string
    googlePlayImgClass: string
    /** ボタン1つの CTA（MobileCtaBar）のラベル */
    appStoreCta: string
    googlePlayCta: string
    comingSoon: string
    comingSoonLong: string
  }
  header: {
    nav: NavLink[]
    getApp: string
  }
  hero: {
    snsBadges: string[]
    title: [string, string]
    lead: string
    checkPoints: string[]
    mobileChips: string[]
    seePricing: string
    previewAlt: string
    homeAlt: string
    /** リリース前のフォロー導線「{before} Instagram {after}」 */
    followBefore: string
    followAfter: string
    followMobile: string
  }
  updateBanner: string
  features: {
    heading: [string, string]
    items: Feature[]
  }
  whatsNew: {
    heading: string
    version: string
    demoAlt: string
    items: WhatsNewItem[]
  }
  howTo: {
    heading: string
    steps: Step[]
    dotLabel: (n: number) => string
  }
  pricing: {
    heading: string
    sub: string
    plans: Plan[]
    note: string
  }
  faq: {
    heading: string
    items: Faq[]
  }
  footer: {
    heading: [string, string]
    sub: string
    qrAlt: (store: string) => string
    qrCaption: string
    legalLinks: NavLink[]
    trademarks: string[]
  }
  mobileCta: {
    title: string
    sub: string
    comingSoonSub: string
  }
}
