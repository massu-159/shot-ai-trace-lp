import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'

type Section = {
  heading: string
  body: ReactNode
}

type Props = {
  title: string
  sections: Section[]
}

function LegalLayout({ title, sections }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-between px-5 py-4 md:px-12 md:py-[22px]">
        <a href="./" className="flex items-center gap-[9px]">
          <div className="size-[11px] rounded-full bg-[#00C853]" />
          <span className="font-display text-[18px] font-bold text-ink">Shot AI Trace</span>
        </a>
        <a href="./" className="text-[13.5px] font-medium text-muted hover:text-muted">
          ← トップへ戻る
        </a>
      </div>
      <main className="mx-auto max-w-[720px] px-5 pt-[clamp(32px,5vw,56px)] pb-24 md:px-8">
        <h1 className="text-[clamp(22px,3vw,32px)] font-black text-ink">{title}</h1>
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

export function renderLegalPage(title: string, sections: Section[]) {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <LegalLayout title={title} sections={sections} />
    </StrictMode>,
  )
}
