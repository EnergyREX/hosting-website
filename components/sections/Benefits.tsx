import React, {ReactNode} from 'react';

import styles from "@/app/page.module.css"
import { TbWorld } from "react-icons/tb";
import { SiPterodactyl, SiSimpleanalytics } from "react-icons/si";
import { IoIosInfinite } from "react-icons/io";
import { FaMoneyBill, FaNetworkWired, FaUserFriends, FaRocket, FaTasks, FaDatabase, FaShieldAlt, FaJava, FaDiscord } from "react-icons/fa";
import { FaFloppyDisk } from "react-icons/fa6";
import { GoFileDirectoryFill } from "react-icons/go";

interface childrenProps {
  children: ReactNode;
}

function BenefitsBody({children}: childrenProps) {
  return(
    <section className={styles.benefitsBody}>
      {children}
    </section>
  )
}

function BenefitsCard({children}: childrenProps) {
  return (
    <div className={styles.benefitsCard}><h4>{children}</h4></div>
  )
}

export default function Benefits() {
  return(
  <div className={styles.benefitsWrapper}>
    <BenefitsBody>
    <div className={styles.titleWrapper}>
      <h1>SYNTALINK OFFERS AN INDUSTRY-LEADING GAME SERVERS WITH EVERYTHING YOU NEED TO MANAGE YOUR MINECRAFT SERVER.</h1>
    </div>
      <BenefitsCard><TbWorld /> MULTIPLE LOCATIONS ARROUND THE WORLD</BenefitsCard>
      <BenefitsCard><SiPterodactyl/> PTERODACTYL CONTROL PANEL</BenefitsCard>
      <BenefitsCard><FaMoneyBill /> 72 HOUR MONEY BACK POLICY</BenefitsCard>
      <BenefitsCard><FaNetworkWired /> FREE SUBDOMAIN CREATOR</BenefitsCard>
      <BenefitsCard><FaUserFriends /> SUPPORT FOR SUBUSERS</BenefitsCard>
      <BenefitsCard><FaRocket /> DEDICATED SOFTWARE</BenefitsCard>
      <BenefitsCard><FaTasks /> SCHEDULED TASKS</BenefitsCard>
      <BenefitsCard><FaDatabase /> FREE DATABASES</BenefitsCard>
      <BenefitsCard><FaShieldAlt /> ANTIDDOS PROTECTION</BenefitsCard>
      <BenefitsCard><IoIosInfinite /> INFINITE SLOTS</BenefitsCard>
      <BenefitsCard><FaJava/> JAVA 8, 11, 16. 17 & 20 SUPPORT</BenefitsCard>
      <BenefitsCard><FaFloppyDisk /> UNMETERED NVME STORAGE</BenefitsCard>
      <BenefitsCard><FaDiscord /> DISCORD SUPPORT</BenefitsCard>
      <BenefitsCard><GoFileDirectoryFill /> FULL FTP ACCESS</BenefitsCard>
      <BenefitsCard><SiSimpleanalytics /> RESOURCE ANALYTICS</BenefitsCard>
    </BenefitsBody>
    </div>
  )
}
