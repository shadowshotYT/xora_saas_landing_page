import Features from "./sections/Features"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Pricing from "./sections/Pricing"
import Faq from './sections/Faq'
import Testimonials from './sections/Testimonials'
import Footer from "./sections/Footer"
import Download from "./sections/Download"

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  )
}

export default App