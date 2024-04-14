import React, { ReactNode } from "react";
import Link from "next/link";

import Image from "next/image"

import styles from "@/app/page.module.css";
import background from "@/public/bgwebsite.webp";
import { CiCircleCheck } from "react-icons/ci";

import { inter } from '@/components/ui/fonts';

export interface OwlBodyProps {
  children: ReactNode;
}

export function OwlBody ({ children }: OwlBodyProps) {
  return(
    <section className={`${inter.className}`}>
      {children}
    </section>
  )
}

interface OwlCardProps {
  children: ReactNode;
}

export function OwlCard({children}: OwlCardProps) {
  return (
    <div className={styles.owlcard}>
      {children}
    </div>
  )
}

export function OwlCardTitle({children}: OwlCardProps) {
  return (
    <h1 className={styles.title3XL}>{children}</h1>
  )
}

export function OwlCardDescription({children}: OwlCardProps) {
  return (
    <p className={styles.owlCardDescription}>{children}</p>
  )
}

export function OwlCardList({children}: OwlCardProps) {
  return (
    <ul className={styles.owlcardlist}>
      {children}
    </ul>
  )
}

export function OwlCardListItem({children}: OwlBodyProps) {
  return (
    <li className={styles.owlcardlistitem}>{children}</li>
  )
}

export function OwlButton ({children}: OwlBodyProps) {
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
        height={900}
        alt="background"
        priority />
      <OwlCard>
        <OwlCardTitle>Syntalink Solutions</OwlCardTitle>
        <OwlCardDescription>
          We provide premium solutions for professionals, developers and businesses.
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