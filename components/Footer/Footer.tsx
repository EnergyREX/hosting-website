import React, {ReactNode} from 'react';
import Link from 'next/link';

import styles from '@/app/page.module.css'

interface ChildrenProps {
  children: ReactNode;
}

function FooterBody({children}: ChildrenProps) {return (<div className={styles.footerBody}>{children}</div>)}

function FooterList({children}: ChildrenProps) {return(<ul className={styles.footerList}>{children}</ul>)}

function FooterListElement({children}: ChildrenProps) {
  return (<li className={styles.footerListElement}>{children}</li>)
}

export default function Footer() {
  return(
    <footer className={styles.footer}>
      <FooterBody>
        <FooterList>
          <FooterListElement><h2 className={styles.footerListTitle}>Our Products</h2></FooterListElement>
          <FooterListElement><Link href="/minecraft-hosting">Minecraft Hosting</Link></FooterListElement>
          <FooterListElement><Link href="/vps">VPS KVM</Link></FooterListElement>
          <FooterListElement><Link href="/web">Web Hosting</Link></FooterListElement>
          <FooterListElement><Link href="/dedicated">Dedicated server Hosting</Link></FooterListElement>
        </FooterList>

        <FooterList>
          <FooterListElement><h2 className={styles.footerListTitle}>Support</h2></FooterListElement>
          <FooterListElement><Link href="https://discord.gg/syntalink">Discord</Link></FooterListElement>
          <FooterListElement><Link href="/">Knowledge Base</Link></FooterListElement>
          <FooterListElement><Link href="/">Status Page</Link></FooterListElement>
          <FooterListElement><Link href="/">Server Specs</Link></FooterListElement>
          <FooterListElement><Link href="/">Minecraft Versions</Link></FooterListElement>
        </FooterList>

        <FooterList>
          <FooterListElement><h2 className={styles.footerListTitle}>Clients</h2></FooterListElement>
          <FooterListElement><Link href="https://payments.syntalink.com/index.php?rp=/login">Login</Link></FooterListElement>
          <FooterListElement><Link href="https://payments.syntalink.com/register.php">Register</Link></FooterListElement>
          <FooterListElement><Link href="https://discord.gg/syntalink">Discord Support</Link></FooterListElement>
          <FooterListElement><Link href="https://payments.syntalink.com/supporttickets.php">Open a Ticket</Link></FooterListElement>
          <FooterListElement><Link href="/about">About us</Link></FooterListElement>
          <FooterListElement><Link href="/partners">Partners</Link></FooterListElement>
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