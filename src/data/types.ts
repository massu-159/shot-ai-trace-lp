// 法務ページ（src/legal/）の言語の型。英語版のトップ（PR #10）を足すときに、トップの文言の型も
// ここに足す。

export type Lang = 'ja' | 'en'

/** 言語切替リンク（もう一方の言語の同じページへ）。 */
export type LangLink = {
  href: string
  /** 切替先の言語で書いたラベル（例: 「English」「日本語」） */
  label: string
  hrefLang: Lang
}
