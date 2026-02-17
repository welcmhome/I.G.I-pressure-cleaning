'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import ServiceAreas from '@/components/ServiceAreas'
import About from '@/components/About'
import Reviews from '@/components/Reviews'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingCallButton from '@/components/FloatingCallButton'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ServiceAreas />
      <About />
      <Reviews />
      <CTA />
      <Contact />
      <Footer />
      <FloatingCallButton />
      <ScrollToTop />
    </main>
  )
}
