import Image from "next/image";

import styles from "@/app/"

import { NavigationMenu } from "@/components/NavMenu";
import Benefits from "@/components/sections/Benefits";
import { ServicesSectionMC } from "@/components/sections/ServicesSection";
import { OwlCard, OwlCardTitle } from "@/components/Owl";
import { CiCircleCheck } from "react-icons/ci";

import background from "@/public/bgwebsite.webp"

export default function Home() {
  return (
    <section>

    <div>
      <Image className={styles.owlbg}
        src={background}
        width={1920}
        height={450}
        alt="background"
        priority />
      <OwlCard>
        <h1>Syntalink Solutions</h1>
        <p>
          We provide premium solutions for professionals, developers and businesses.
        </p>
        <ul>
          <li><CiCircleCheck className={styles.listitemicon}/> Game server hosting.</li>
          <li><CiCircleCheck className={styles.listitemicon}/>  Reliable KVM VPS.</li>
          <li><CiCircleCheck className={styles.listitemicon}/>  Web hosting.</li>
          <li><CiCircleCheck className={styles.listitemicon}/>  Discord Bot Hosting.</li>
        </ul>
        <button>See our products</button>
      </OwlCard>
    </div>

      <Benefits />
      {<ServicesSectionMC />}
    </section>
  );
}
