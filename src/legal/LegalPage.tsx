import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import logoWhite from '../assets/logo-white.webp'
import type { Lang, LangLink } from '../data/types'
import '../index.css'

type Section = {
  heading: string
  body: ReactNode
}

type Options = {
  /** ページの言語（既定は日本語）。戻るリンクの文言に使う。 */
  lang?: Lang
  /** もう一方の言語の同じページ（無いページは省く。例: 特定商取引法に基づく表記） */
  langLink?: LangLink
  /** 見出しの直下に置く1段落（英訳の断り書き・英語版への案内など） */
  intro?: ReactNode
}

type Props = Options & {
  title: string
  sections: Section[]
}

const backLabel: Record<Lang, string> = {
  ja: '← トップへ戻る',
  en: '← Back to top',
}

function LegalLayout({ title, sections, lang = 'ja', langLink, intro }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-between px-5 py-4 md:px-12 md:py-[22px]">
        {/* ヘッダーのロゴ・タイトルはトップページ（Header.tsx）と同じ組。 */}
        <a href="./" className="flex items-center gap-[10px]">
          <span className="inline-flex size-9 items-center justify-center rounded-[6px] bg-ink">
            <img src={logoWhite} alt="" className="size-9" />
          </span>
          <span className="font-michroma text-[15px] text-ink">Shot AI Trace</span>
        </a>
        <div className="flex items-center gap-4">
          {langLink && (
            <a
              href={langLink.href}
              hrefLang={langLink.hrefLang}
              lang={langLink.hrefLang}
              className="rounded-full border border-[#d9e2da] px-3 py-[6px] text-[12px] font-medium text-muted hover:text-ink"
            >
              {langLink.label}
            </a>
          )}
          <a href="./" className="text-[13.5px] font-medium text-muted hover:text-muted">
            {backLabel[lang]}
          </a>
        </div>
      </div>
      <main className="mx-auto max-w-[720px] px-5 pt-[clamp(32px,5vw,56px)] pb-24 md:px-8">
        <h1 className="text-[clamp(22px,3vw,32px)] font-black text-ink">{title}</h1>
        {intro && (
          <div className="mt-4 rounded-xl bg-step px-4 py-3 text-[13px] leading-[1.8] text-moss">
            {intro}
          </div>
        )}
        <div className="mt-8 flex flex-col gap-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-[15.5px] font-bold text-ink">{section.heading}</h2>
              <div className="mt-2 text-[13.5px] leading-[1.9] text-muted">{section.body}</div>
            </section>
          ))}
        </div>
        <p className="mt-16 text-center text-[11.5px] text-[#8a938c]">© 2026 Shot AI Trace</p>
      </main>
    </div>
  )
}

export function renderLegalPage(title: string, sections: Section[], options: Options = {}) {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <LegalLayout title={title} sections={sections} {...options} />
    </StrictMode>,
  )
}
