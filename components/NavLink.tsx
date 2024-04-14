import React ,{ReactNode}  from 'react'
import Link from 'next/link'

import styles from "@/components/modules/card.module.css"

interface NavbarProps {
  children: ReactNode;
}

const Navbar = ({children}: NavbarProps) => {
  return (
    <nav>
      {children}
    </nav>
  )
}

interface Navlinkprops {
    children: ReactNode
    href: string
}

const Navlink = ({children, href}:Navlinkprops) => {
    return (
      <Link href={href} className={styles.actionBtn}>
        {children}
      </Link>
    )
}

export default Navbar