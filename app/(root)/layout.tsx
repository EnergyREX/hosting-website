import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

import { FaLock } from "react-icons/fa";
import Image from "next/image";

import { 
  NavigationMenu, 
  NavigationLogo,
  NavigationMenuList,
  NavigationMenuItem, 
  NavigationMenuBilling,
   } from "@/components/NavMenu"

import infotype from "@/public/syntalink-infotype.png"
import Link from "next/link";
import Footer from "@/components/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syntalink Solutions | Hosting at cheap prices",
  description: "Minecraft, VPS, Web and dedicated servers for proffesionals, developers and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <nav>      
            <NavigationMenu>
            <NavigationLogo><Link href="/"><Image src={infotype} width={249} height={60} alt="syntalink-infotype" /></Link></NavigationLogo>
              <NavigationMenuList>
                <NavigationMenuItem href="/minecraft-hosting">Minecraft Hosting</NavigationMenuItem>
                <NavigationMenuItem href="/vps">VPS KVM</NavigationMenuItem>
                <NavigationMenuItem href="/dedicated">Dedicated Hosting</NavigationMenuItem>
                <NavigationMenuItem href="/web">Web hosting</NavigationMenuItem>
                <NavigationMenuBilling><FaLock /> CLIENT AREA</NavigationMenuBilling>
              </NavigationMenuList>
            </NavigationMenu>
            </nav>
        {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}
