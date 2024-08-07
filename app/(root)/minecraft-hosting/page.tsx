import Image from "next/image";

import styles from "@/app/page.module.css"

import Benefits from "@/app/(root)/minecraft-hosting/Benefits";
import { ServicesSectionMC } from "@/app/(root)/ServicesSection";
import Card, { CardHeader, CardBody, CardDesc } from '@/components/ui/Card/Card';
import { CiCircleCheck } from "react-icons/ci";

import background from "@/public/mcbg.jpg"

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
      <Card>
        <CardHeader>
          Minecraft Hosting
        </CardHeader>
        <CardBody>
          <CardDesc>
            Cheap Minecraft hosting for any user. Buy your server starting at 0.99$ with a high-end CPU.
          </CardDesc>
        </CardBody>
      </Card>
    </div>

      <Benefits />
      {<ServicesSectionMC />}
    </section>
  );
}
