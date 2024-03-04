import Image from "next/image";
import styles from "./page.module.css";
import NavMenu from "./ui/components/NavMenu"
import Owl from "./ui/components/Owl";
import ServicesSection from "./ui/components/ServicesSection";
import WhyUs from "./ui/components/WhyUs";

export default function Home() {
  return (
    <main>
      <NavMenu />
      <Owl />
      <ServicesSection />
      <WhyUs />
    </main>
  );
}
