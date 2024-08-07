import React, {ReactNode} from 'react';
import Image from 'next/image';

import bgImg from "@/public/bgwebsite.webp"

import styles from "./home.module.css"

import Card, { CardHeader, CardBody } from '../../components/ui/Card/Card';
import Button from '../../components/ui/Button/Button';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <Card className={styles.frostedCard}>
        <CardHeader className={styles.cardTitle}>
          <h1>Made for Gamers & Proffesionals</h1>
          </CardHeader>  
          <CardBody className={styles.cardDesc}>
            Elevate your Hosting experience with SyntaLink Solutions, 
            a leader in world-class features. Join our community to enjoy 
            impeccable performance and reliable support on your adventure 
            with us.
          <Button className={styles.heroButton}> See our products </Button>
          </CardBody>
      </Card>
        <Image className={styles.bgImg}
        src={bgImg} alt='bg-img'
        width={1920} height={750}>
        </Image>
    </div>
  )
}

export default HeroSection