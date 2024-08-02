import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'
import { FaExternalLinkAlt } from "react-icons/fa";
import styles from "./navbar.module.css"

import { FaLock, FaGamepad, FaServer, FaMoneyBill } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className={styles.navigationMenu}>      
    <Link href="/"><p className={styles.navigationMenuLogo}>WEBSITE LOGO</p></Link>
      <ul className={styles.navigationList}>
        <Link className={styles.navigationItem} href="/">Home</Link>
        <Link className={styles.navigationItem} href="/minecraft-hosting">Minecraft Hosting</Link>
        <Link className={styles.navigationItem} href="/vps">VPS KVM</Link>
        <Link className={styles.navigationItem} href="/web">Web hosting</Link>
        <div>
          <Button className={styles.clientAreaBtn}><FaLock /> CLIENT AREA</Button>
          <ul className={styles.clientAreaUl}>
            <li className={styles.dropDwnUl}><Link className={styles.dropDwnLink} href="VPS-PANEL"><FaServer className={styles.dropDwnIcon} />VPS Panel <FaExternalLinkAlt /></Link></li>
            <li className={styles.dropDwnUl}><Link className={styles.dropDwnLink} href="GAME-PANEL"><FaGamepad className={styles.dropDwnIcon} />Game panel <FaExternalLinkAlt /></Link></li>
            <li className={styles.dropDwnUl}><Link className={styles.dropDwnLink} href="BILLING-PANEL"><FaMoneyBill className={styles.dropDwnIcon} />Billing Area <FaExternalLinkAlt /></Link></li>
          </ul>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar