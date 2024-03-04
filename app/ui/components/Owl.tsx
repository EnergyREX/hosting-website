import React, { ReactNode } from "react";
import Link from "next/link";

import Image from "next/image"

import styles from "@/app/page.module.css";
import background from "@/public/bgwebsite.webp";
import { CiCircleCheck } from "react-icons/ci";

import { inter } from '@/app/ui/fonts';

interface OwlBodyProps {
  children: ReactNode;
}

function OwlBody ({ children }: OwlBodyProps) {
  return(
    <section className={`${inter.className}`}>
      {children}
    </section>
  )
}

interface OwlCardProps {
  children: ReactNode;
}

function OwlCard({children}: OwlCardProps) {
  return (
    <div className={styles.owlcard}>
      {children}
    </div>
  )
}

function OwlCardTitle({children}: OwlCardProps) {
  return (
    <h1>{children}</h1>
  )
}

function OwlCardDescription({children}: OwlCardProps) {
  return (
    <p className={styles.owlCardDescription}>{children}</p>
  )
}

function OwlCardList({children}: OwlCardProps) {
  return (
    <ul className={styles.owlcardlist}>
      {children}
    </ul>
  )
}

function OwlCardListItem({children}: OwlBodyProps) {
  return (
    <li className={styles.owlcardlistitem}>{children}</li>
  )
}

function OwlButton ({children}: OwlBodyProps) {
  return (
    <button className={styles.actionBtn}> {children} </button>
  )
}


export default function Owl () {
  return (
    <OwlBody>
      <Image className={styles.owlbg}
        src={background}
        width={1920}
        height={1024}
        alt="background"
        priority />
      <OwlCard>
        <OwlCardTitle>Syntalink Solutions</OwlCardTitle>
        <OwlCardDescription>
          We provide premium solitions for professionals, developers and businesses.
        </OwlCardDescription>
        <OwlCardList>
          <OwlCardListItem><CiCircleCheck className={styles.listitemicon}/> Game server hosting.</OwlCardListItem>
          <OwlCardListItem><CiCircleCheck className={styles.listitemicon}/>  Reliable KVM VPS.</OwlCardListItem>
          <OwlCardListItem><CiCircleCheck className={styles.listitemicon}/>  Web hosting.</OwlCardListItem>
          <OwlCardListItem><CiCircleCheck className={styles.listitemicon}/>  Discord Bot Hosting.</OwlCardListItem>
        </OwlCardList>
        <OwlButton>See our products</OwlButton>
      </OwlCard>
    </OwlBody>
  )
}