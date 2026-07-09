import { Faq } from './components/Faq'
import { Features } from './components/Features'
import { FooterCta } from './components/FooterCta'
import { Hero } from './components/Hero'
import { HowTo } from './components/HowTo'
import { MobileCtaBar } from './components/MobileCtaBar'
import { Pricing } from './components/Pricing'

function App() {
  return (
    <div className="min-w-0 bg-white">
      <Hero />
      <Features />
      <HowTo />
      <Pricing />
      <Faq />
      <FooterCta />
      <MobileCtaBar />
    </div>
  )
}

export default App
