import Image from "next/image";
import styles from "./page.module.css";
import NavMenu from "@/app/ui/components/NavMenu"
import Owl from "@/app/ui/components/Owl";
import Footer from "@/app/ui/components/Footer"
import Benefits from "@/app/ui/components/Benefits"
import {ServicesSectionMC} from "@/app/ui/components/ServicesSection"

export default function Home() {
  return (
    <main>
      <NavMenu />
      <Owl />
      <Benefits />
      {/*<ServicesSectionMC />*/}
      <Footer />
    </main>
  );
}
