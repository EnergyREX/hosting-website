import React, {ReactNode} from 'react';
import Link from 'next/link';

import styles from '@/app/page.module.css'

export default function Footer() {
  return(
    <footer className={styles.footer}>
        <ul className={styles.footerList}>
          <li className={styles.footerListElement}><h2 className={styles.footerListTitle}>Our Products</h2></li>
          <li className={styles.footerListElement}><Link href="/minecraft-hosting">Minecraft Hosting</Link></li>
          <li className={styles.footerListElement}><Link href="/vps">VPS KVM</Link></li>
          <li className={styles.footerListElement}><Link href="/web">Web Hosting</Link></li>
          <li className={styles.footerListElement}><Link href="/dedicated">Dedicated server Hosting</Link></li>
        </ul>

        <ul className={styles.footerList}>
          <li className={styles.footerListElement}><h2 className={styles.footerListTitle}>Support</h2></li>
          <li className={styles.footerListElement}><Link href="https://discord.gg/syntalink">Discord</Link></li>
          <li className={styles.footerListElement}><Link href="/">Knowledge Base</Link></li>
          <li className={styles.footerListElement}><Link href="/">Status Page</Link></li>
          <li className={styles.footerListElement}><Link href="/">Server Specs</Link></li>
          <li className={styles.footerListElement}><Link href="/">Minecraft Versions</Link></li>
        </ul>

        <ul className={styles.footerList}>
          <li className={styles.footerListElement}><h2 className={styles.footerListTitle}>Clients</h2></li>
          <li className={styles.footerListElement}><Link href="https://payments.syntalink.com/index.php?rp=/login">Login</Link></li>
          <li className={styles.footerListElement}><Link href="https://payments.syntalink.com/register.php">Register</Link></li>
          <li className={styles.footerListElement}><Link href="https://discord.gg/syntalink">Discord Support</Link></li>
          <li className={styles.footerListElement}><Link href="https://payments.syntalink.com/supporttickets.php">Open a Ticket</Link></li>
          <li className={styles.footerListElement}><Link href="/about">About us</Link></li>
          <li className={styles.footerListElement}><Link href="/partners">Partners</Link></li>
        </ul>

        <ul className={styles.footerList}>
          <li className={styles.footerListElement}><h2 className={styles.footerListTitle}>Legal</h2></li>
          <li className={styles.footerListElement}><Link href="/">Terms of Service</Link></li>
          <li className={styles.footerListElement}><Link href="/">Privacy Policy</Link></li>
          <li className={styles.footerListElement}><Link href="/">Report abuse</Link></li>
          <li className={styles.footerListElement}><Link href="https://www.minecraft.net/en-us/eula">Minecraft EULA</Link></li>
        </ul>
    </footer>
  )
}