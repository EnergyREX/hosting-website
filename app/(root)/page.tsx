import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyUs from '@/components/sections/WhyUs'
import React from 'react'

import { heroData } from "@/lib/constants"

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