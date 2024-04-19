import HeroSection from '@/app/(root)/HeroSection'
import ServicesSection from '@/app/(root)/ServicesSection'
import WhyUs from '@/app/(root)/WhyUs'
import React from 'react'

const Home = () => {
  return (
    <section> 
      <HeroSection />
      <ServicesSection />
      <WhyUs />
    </section>
  )
}

export default Home