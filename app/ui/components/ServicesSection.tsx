import React, {ReactNode} from 'react';
import Link from 'next/link';

import styles from '@/app/page.module.css'

import { FiCpu } from "react-icons/fi";
import { FaMemory, FaShieldHalved, FaCalendarCheck } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsNvmeFill } from "react-icons/bs";

interface childrenProps {
  children: ReactNode;
}

function ServicesSectionBody ({children}: childrenProps) {
  return (
    <section className={styles.servicesSection}>
      {children}
    </section>  
  )
}


function ServicesSectionCard({children}: childrenProps) {
  return (
    <section className={styles.servicesCard}>
      {children}
    </section>
  )
}

function SectionCardHead({children}: childrenProps) {
  return (
  <div className={styles.cardHead}>
    {children}
  </div>)
}

function CardTitle({children}: childrenProps) {
  return (
    <h2>{children}</h2>
  )
}

function CardDescription({children}: childrenProps) {
  return (
    <p className={styles.cardDesc}>{children}</p>
  )
}

function CardDescriptionPrice({children}: childrenProps) {
  return (
    <h3 className={styles.cardDescPrice}>{children}</h3>
  )
}

function CardSpecificationsList({children}: childrenProps) {
  return (
    <ul className={styles.cardSpecsList}>
      {children}
    </ul>
  )
}

function SpecsListItem ({children}: childrenProps) {
  return (
    <li className={styles.listItem}>{children}</li>
  )
}

function OrderNow ({children}: childrenProps) {
  return (
    <button className={styles.orderBtn}>{children}</button>
  )
}

export default function ServicesSection() {
  return (
    <ServicesSectionBody>
      <ServicesSectionCard>
        <SectionCardHead>
          <CardTitle>Game Server Hosting</CardTitle>
          <CardDescription>High perfomance Minecraft servers starting at</CardDescription>
          <CardDescriptionPrice>0.99$/mo</CardDescriptionPrice>
        </SectionCardHead>
        <CardSpecificationsList>
          <SpecsListItem><FiCpu className={styles.serviceitemicon}/> AMD Ryzen 5950X</SpecsListItem>
          <SpecsListItem><FaMemory className={styles.serviceitemicon}/> DDR4 ECC @ 2666Mhz RAM</SpecsListItem>
          <SpecsListItem><BsNvmeFill className={styles.serviceitemicon}/> NVMe SSD</SpecsListItem>
          <SpecsListItem><FaCalendarCheck className={styles.serviceitemicon}/> Daily Backups</SpecsListItem>
          <SpecsListItem><FaShieldHalved className={styles.serviceitemicon}/> Anti DDoS Protection</SpecsListItem>
          <SpecsListItem><FaGlobeAmericas className={styles.serviceitemicon}/> Miami, US </SpecsListItem>
          <OrderNow>Order Now!</OrderNow>
        </CardSpecificationsList>
      </ServicesSectionCard>

      <ServicesSectionCard>
        <SectionCardHead>
          <CardTitle>KVM VPS Servers</CardTitle>
          <CardDescription>Powerful hardware in KVM VPS Servers starting at</CardDescription>
          <CardDescriptionPrice>5.99$/mo</CardDescriptionPrice>
        </SectionCardHead>
        <CardSpecificationsList>
          <SpecsListItem><FiCpu className={styles.serviceitemicon}/> AMD Ryzen 5950X</SpecsListItem>
          <SpecsListItem><FaMemory className={styles.serviceitemicon}/> DDR4 ECC @ 2666Mhz RAM</SpecsListItem>
          <SpecsListItem><BsNvmeFill className={styles.serviceitemicon}/> NVMe SSD</SpecsListItem>
          <SpecsListItem><FaCalendarCheck className={styles.serviceitemicon}/> Daily Backups</SpecsListItem>
          <SpecsListItem><FaShieldHalved className={styles.serviceitemicon}/> Anti DDoS Protection</SpecsListItem>
          <SpecsListItem><FaGlobeAmericas className={styles.serviceitemicon}/> Miami, US </SpecsListItem>
          <OrderNow>Order Now!</OrderNow>
        </CardSpecificationsList>
      </ServicesSectionCard>


      <ServicesSectionCard>
        <SectionCardHead>
          <CardTitle>Website hosting</CardTitle>
          <CardDescription>High perfomance Minecraft servers starting at</CardDescription>
          <CardDescriptionPrice>0.99$/mo</CardDescriptionPrice>
        </SectionCardHead>
        <CardSpecificationsList>
          <SpecsListItem><FiCpu className={styles.serviceitemicon}/> AMD EPYC 9654</SpecsListItem>
          <SpecsListItem><FaMemory className={styles.serviceitemicon}/> DDR4 ECC @ 2666Mhz RAM</SpecsListItem>
          <SpecsListItem><BsNvmeFill className={styles.serviceitemicon}/> NVMe SSD</SpecsListItem>
          <SpecsListItem><FaCalendarCheck className={styles.serviceitemicon}/> Daily Backups</SpecsListItem>
          <SpecsListItem><FaShieldHalved className={styles.serviceitemicon}/> Anti DDoS Protection</SpecsListItem>
          <SpecsListItem><FaGlobeAmericas className={styles.serviceitemicon}/> Miami, US </SpecsListItem>
          <OrderNow>Order Now!</OrderNow>
        </CardSpecificationsList>
      </ServicesSectionCard>


      <ServicesSectionCard>
        <SectionCardHead>
          <CardTitle>Dedicated server hosting</CardTitle>
          <CardDescription>High perfomance Minecraft servers starting at</CardDescription>
          <CardDescriptionPrice>0.99$/mo</CardDescriptionPrice>
        </SectionCardHead>
        <CardSpecificationsList>
          <SpecsListItem><FiCpu className={styles.serviceitemicon}/> AMD Ryzen 5950X</SpecsListItem>
          <SpecsListItem><FaMemory className={styles.serviceitemicon}/> DDR4 ECC @ 2666Mhz RAM</SpecsListItem>
          <SpecsListItem><BsNvmeFill className={styles.serviceitemicon}/> NVMe SSD</SpecsListItem>
          <SpecsListItem><FaCalendarCheck className={styles.serviceitemicon}/> Daily Backups</SpecsListItem>
          <SpecsListItem><FaShieldHalved className={styles.serviceitemicon}/> Anti DDoS Protection</SpecsListItem>
          <SpecsListItem><FaGlobeAmericas className={styles.serviceitemicon}/> Miami, US </SpecsListItem>
          <OrderNow>Order Now!</OrderNow>
        </CardSpecificationsList>
      </ServicesSectionCard>
    </ServicesSectionBody>
  )
}

