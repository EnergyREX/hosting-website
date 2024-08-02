import React, {ReactNode} from 'react';

import { FaHeartbeat } from "react-icons/fa";
import { FaDisplay, FaMoneyBills } from "react-icons/fa6";
import { IoIosStats, IoIosChatbubbles, IoMdStar } from "react-icons/io";
import styles from "@/app/page.module.css";

interface childrenProps {
  children: ReactNode;
}

function WhyUsSection({children}: childrenProps) {
  return(
    <section className={styles.whyUsSection}>
      {children}
    </section>
  )
}

function WhyUsTitle({children}: childrenProps) {
  return(
    <h1 className={styles.whyUsTitle}>{children}</h1>
  )
}

function CardWrapper({children}: childrenProps) {
  return (
  <section className={styles.textCardWrapper}>
    {children}
  </section>)
}

function TextCard({children}: childrenProps) {
  return(
    <div className={styles.textCard}>
      {children}
    </div>
  )
}

function TextCardTitle({children}: childrenProps) {
  return(
    <h2 className={styles.textCardTitle}>{children}</h2>
  )
}

function TextCardDescription({children}: childrenProps) {
  return (
    <p>{children}</p>
  )
}

export default function WhyUs() {
  return(
    <WhyUsSection>
      <WhyUsTitle>Why should choose us?</WhyUsTitle>
      <CardWrapper>
        <TextCard>
          <TextCardTitle><FaHeartbeat className={styles.textCardIcon} />100% Server Uptime</TextCardTitle>
          <TextCardDescription>
            Syntalink works to provide a 100% uptime on all 
            of our plans, day or night we keep your services online.
            </TextCardDescription>
        </TextCard>
        
        <TextCard>
          <TextCardTitle><IoIosStats className={styles.textCardIcon} />Transparent Node Stats</TextCardTitle>
            <TextCardDescription>
            Being as transparent as possible is important to us, 
            that is why we publicly display our node stats ensuring 
            you are on a high quality server that is not being oversold.
            </TextCardDescription>
        </TextCard>

        <TextCard>
          <TextCardTitle><FaDisplay className={styles.textCardIcon} />Custom Control Panel</TextCardTitle>
            <TextCardDescription>
            We are proud to offer a custom control panel outfitted 
            with all the features you will need - many of which are simply 
            unbeaten by our competitors. Check out a demo here.
            </TextCardDescription>
        </TextCard>

        <TextCard>
          <TextCardTitle><FaMoneyBills className={styles.textCardIcon} />Unbeatable Pricing</TextCardTitle>
          <TextCardDescription>
          We offer simply unrivalled pricing, providing 
          powerful hardware, fast support and a high level 
          of reliability for an affordable price.
            </TextCardDescription>
        </TextCard>

        <TextCard>
          <TextCardTitle><IoMdStar className={styles.textCardIcon} />Highly Reviewed</TextCardTitle>
            <TextCardDescription>
            Scoring a 4.8/5 star rating allows Syntalink 
            to be one of the highest rated hosts at our price 
            point, ensuring you are buying from a highly trusted 
            provider.
            </TextCardDescription>
        </TextCard>

        <TextCard>
          <TextCardTitle><IoIosChatbubbles className={styles.textCardIcon} />100% Server Uptime</TextCardTitle>
            <TextCardDescription>
            Our UK & US based support team work around the 
            clock providing a leading support experience, 
            with average response times under 30 minutes 
            via our Discord support system.
            </TextCardDescription>
        </TextCard>
      </CardWrapper>
    </WhyUsSection>
  )
}