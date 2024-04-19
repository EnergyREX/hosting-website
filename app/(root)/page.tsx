import HeroSection from '@/app/(root)/HeroSection'
import ServicesSection from '@/app/(root)/ServicesSection'
import WhyUs from '@/app/(root)/WhyUs'
import React from 'react'

import styles from "./home.module.css"

import Card from "@/components/ui/Card/Card"

const Home = () => {
  return (
    <section> 
      <HeroSection />
      <ServicesSection />
      <WhyUs />
      <section>
        <h1>What our clients say about us</h1>
        <Card className={styles.cardReview}>
          <h1>Rating</h1>
          <h4>An awesome date</h4>
          <h4>An awesome username</h4>
          <h4>An awesome product</h4>
          <h1>An awesome review</h1>
          <p>An awesome comment</p>

        </Card>
      </section>
    </section>
  )
}

export default Home