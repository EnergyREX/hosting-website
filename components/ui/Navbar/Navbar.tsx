import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'

import styles from "./navbar.module.css"
import infotype from "@/public/syntalink-infotype.png"

import { FaLock } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className={styles.navigationMenu}>      
    <Link href="/"><Image src={infotype} width={249} height={60} alt="syntalink-infotype" /></Link>
      <ul className={styles.navigationList}>
        <Link className={styles.navigationItem} href="/minecraft-hosting">Minecraft Hosting</Link>
        <Link className={styles.navigationItem} href="/vps">VPS KVM</Link>
        <Link className={styles.navigationItem} href="/dedicated">Dedicated Hosting</Link>
        <Link className={styles.navigationItem} href="/web">Web hosting</Link>
        <Button className={styles.clientAreaBtn}><FaLock /> CLIENT AREA</Button>
      </ul>
    </nav>
  )
}

export default Navbar