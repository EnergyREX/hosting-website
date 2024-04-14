import React, {ReactNode} from "react";
import Link from "next/link";

import styles from "@/app/page.module.css";

interface NavigationMenuProps {
  children: ReactNode;
}

export function NavigationMenu ({children}: NavigationMenuProps) {
  return (
    <nav className={styles.navigationMenu}>
      {children}
    </nav>
  )
}

interface NavigationTitleProps {
  children: ReactNode;
}

export function NavigationLogo ({ children }: NavigationTitleProps) {
  return (
    <h1 className={styles.navigationTitle}>{children}</h1>
  )
}

interface NavigationMenuListProps {
  children: ReactNode;
}

export function NavigationMenuList({ children }: NavigationMenuListProps) {
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

export function NavigationMenuItem ({ children, href }: NavigationMenuItemProps) {
  return (
    <li className={styles.navigationItem}><Link href={href}>{children}</Link></li>
  )
}

interface NavigationMenuBillingProps {
  children: ReactNode;
}

export function NavigationMenuBilling ({ children }: NavigationMenuBillingProps) {
  return <button className={styles.navigationBillingButton}>{children}</button>
}