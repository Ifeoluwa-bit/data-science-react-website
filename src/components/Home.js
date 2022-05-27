
import './Home.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Pricing from './Pricing'
import Testimonial from './Testimonial'
import Faq from './Faq'
import Contact from './Contact'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Pricing />
        <Testimonial />
        <Faq />
        <Contact />
        <Footer />
    </div>
  )
}
