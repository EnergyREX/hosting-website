import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'

import styles from "./navbar.module.css"
import infotype from "@/public/syntalink-infotype.png"

import { FaLock, FaGamepad, FaServer, FaMoneyBill } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className={styles.navigationMenu}>      
    <Link href="/"><Image src={infotype} width={249} height={60} alt="syntalink-infotype" /></Link>
      <ul className={styles.navigationList}>
        <Link className={styles.navigationItem} href="/minecraft-hosting">Minecraft Hosting</Link>
        <Link className={styles.navigationItem} href="/vps">VPS KVM</Link>
        <Link className={styles.navigationItem} href="/dedicated">Dedicated Hosting</Link>
        <Link className={styles.navigationItem} href="/web">Web hosting</Link>
        <div>
          <Button className={styles.clientAreaBtn}><FaLock /> CLIENT AREA</Button>
          <ul className={styles.clientAreaUl}>
            <li className={styles.dropDwnUl}><Link className={styles.dropDwnUl} href="VPS-PANEL"><FaServer /> VPS Panel <p className={styles.descriptionDropDwn}>(Login Virtfusion)</p> </Link></li>
            <li className={styles.dropDwnUl}><Link className={styles.dropDwnUl} href="GAME-PANEL"><FaGamepad /> Game panel <p className={styles.descriptionDropDwn}>(Login Gameservers)</p></Link></li>
            <li className={styles.dropDwnUl}><Link className={styles.dropDwnUl} href="BILLING-PANEL"><FaMoneyBill /> Billing Area <p className={styles.descriptionDropDwn}>(Login billing)</p></Link></li>
          </ul>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar