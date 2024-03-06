import React, {ReactNode} from 'react';
import Link from 'next/link';

import styles from '@/app/page.module.css'

interface ChildrenProps {
  children: ReactNode;
}

function FooterBody({children}: ChildrenProps) {
  return (<div className={styles.footerBody}>{children}</div>)
}

function FooterList({children}: ChildrenProps) {
  return(<ul className={styles.footerList}>{children}</ul>)
}

function FooterListElement({children}: ChildrenProps) {
  return (<li className={styles.footerListElement}>{children}</li>)
}

export default function Footer() {
  return(
    <footer className={styles.footer}>
      <FooterBody>
        <FooterList>
          <FooterListElement><h2 className={styles.footerListTitle}>Our Products</h2></FooterListElement>
          <FooterListElement><Link href="/">Minecraft Hosting</Link></FooterListElement>
          <FooterListElement><Link href="/">Game Hosting</Link></FooterListElement>
          <FooterListElement><Link href="/">VPS KVM</Link></FooterListElement>
          <FooterListElement><Link href="/">Web Hosting</Link></FooterListElement>
          <FooterListElement><Link href="/">Dedicated server Hosting</Link></FooterListElement>
        </FooterList>

        <FooterList>
          <FooterListElement><h2 className={styles.footerListTitle}>Support</h2></FooterListElement>
          <FooterListElement><Link href="/">Discord</Link></FooterListElement>
          <FooterListElement><Link href="/">Knowledge Base</Link></FooterListElement>
          <FooterListElement><Link href="/">Status Page</Link></FooterListElement>
          <FooterListElement><Link href="/">Server Specs</Link></FooterListElement>
          <FooterListElement><Link href="/">Minecraft Versions</Link></FooterListElement>
        </FooterList>

        <FooterList>
          <FooterListElement><h2 className={styles.footerListTitle}>Clients</h2></FooterListElement>
          <FooterListElement><Link href="/">Login</Link></FooterListElement>
          <FooterListElement><Link href="/">Register</Link></FooterListElement>
          <FooterListElement><Link href="/">Discord Support</Link></FooterListElement>
          <FooterListElement><Link href="/">About us</Link></FooterListElement>
          <FooterListElement><Link href="/">Partners</Link></FooterListElement>
        </FooterList>

        <FooterList>
          <FooterListElement><h2 className={styles.footerListTitle}>Legal</h2></FooterListElement>
          <FooterListElement><Link href="/">Terms of Service</Link></FooterListElement>
          <FooterListElement><Link href="/">Privacy Policy</Link></FooterListElement>
          <FooterListElement><Link href="/">Report abuse</Link></FooterListElement>
          <FooterListElement><Link href="https://www.minecraft.net/en-us/eula">Minecraft EULA</Link></FooterListElement>
        </FooterList>
      </FooterBody>
    </footer>
  )
}