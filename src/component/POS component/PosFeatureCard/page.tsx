"use client";

import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import { feature } from "@/app/(business)/business/pos/page.data";
import { ReactNode } from "react";
import {motion} from "framer-motion";

const PosFeatureCard = ({feat }: {feat: feature}) : ReactNode => {
  return (
    <main className={styles.main}>
      <motion.div className={styles.feature} initial={{scale: 0.8}} whileInView={{scale: 1}} transition={{duration: 1,delay: 0, ease:"easeOut"}}>
        <div className={styles.featureContent}>
          <h2 className={styles.featureHeading}>{feat.heading}</h2>
          <p className={styles.featureInfo}>{feat.content}</p>
          <div className={styles.buttonBox}>
            <Link href={feat.link1} className={styles.featureLink}>
            {feat.buttonName1 != "" &&
              <button type="button" className={styles.featureButton}>
                Request a POS
                <span className={styles.arrowRight}>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </button>
            }
            </Link>
          </div>
        </div>
        <div className={styles.featureImageBox}>
          <Image src={feat.src} alt={feat.heading} className={styles.featureImage} />
        </div>
      </motion.div>
    </main>
  );
};

export default PosFeatureCard;
