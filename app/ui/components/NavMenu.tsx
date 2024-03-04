import React, {ReactNode} from "react";
import Link from "next/link";

import styles from "@/app/page.module.css";
import { FaLock } from "react-icons/fa";

interface NavigationMenuProps {
  children: ReactNode;
}

function NavigationMenu ({children}: NavigationMenuProps) {
  return (
    <nav className={styles.navigationMenu}>
      {children}
    </nav>
  )
}

interface NavigationTitleProps {
  children: ReactNode;
}

function NavigationTitle ({ children }: NavigationTitleProps) {
  return (
    <h1 className={styles.navigationTitle}>{children}</h1>
  )
}

interface NavigationMenuListProps {
  children: ReactNode;
}

function NavigationMenuList({ children }: NavigationMenuListProps) {
  return (
    <ul className={styles.navigationList}>
      {children}
    </ul>
  );
}

interface NavigationMenuItemProps {
  children: ReactNode;
  href: string;
}

function NavigationMenuItem ({ children, href }: NavigationMenuItemProps) {
  return (
    <li className={styles.navigationItem}><Link href={href}>{children}</Link></li>
  )
}

interface NavigationMenuBillingProps {
  children: ReactNode;
}

function NavigationMenuBilling ({ children }: NavigationMenuBillingProps) {
  return <button className={styles.navigationBillingButton}>{children}</button>
}

export default function NavMenu () {
  return (
    <NavigationMenu>
      <NavigationTitle>LOGO</NavigationTitle>
      <NavigationMenuList>
        <NavigationMenuItem href="/">Game Hosting</NavigationMenuItem>
        <NavigationMenuItem href="/">VPS KVM</NavigationMenuItem>
        <NavigationMenuItem href="/">Minecraft Host</NavigationMenuItem>
        <NavigationMenuItem href="/">Dedicated Hosting</NavigationMenuItem>
        <NavigationMenuItem href="/">Web hosting</NavigationMenuItem>
        <NavigationMenuBilling><FaLock /> CLIENT AREA</NavigationMenuBilling>
      </NavigationMenuList>
    </NavigationMenu>
  )
}