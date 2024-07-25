import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

import { FaLock } from "react-icons/fa";
import Image from "next/image";



import infotype from "@/public/syntalink-infotype.png"
import Link from "next/link";
import Footer from "@/components/ui/Footer/Footer";
import Navbar from "@/components/ui/Navbar/Navbar";


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
        <Navbar />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}
