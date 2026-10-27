import { ContentContext } from './content'
import type { Content } from './data/types'
import { Faq } from './components/Faq'
import { Features } from './components/Features'
import { FooterCta } from './components/FooterCta'
import { Hero } from './components/Hero'
import { HowTo } from './components/HowTo'
import { MobileCtaBar } from './components/MobileCtaBar'
import { Pricing } from './components/Pricing'
import { UpdateBanner } from './components/UpdateBanner'
import { WhatsNew } from './components/WhatsNew'

// 文言は content（言語ごと）から各セクションへ渡す。
function App({ content }: { content: Content }) {
  return (
    <ContentContext.Provider value={content}>
      <div className="min-w-0 bg-white">
        <Hero />
        <UpdateBanner />
        <Features />
        <WhatsNew />
        <HowTo />
        <Pricing />
        <Faq />
        <FooterCta />
        <MobileCtaBar />
      </div>
    </ContentContext.Provider>
  )
}

export default App
