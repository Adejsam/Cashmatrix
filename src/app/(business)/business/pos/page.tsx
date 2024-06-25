"use client";

import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import Cta from "@/component/POS component/BlackCallToAction/cta";
import PosFeatureCard from "@/component/POS component/PosFeatureCard/page";
import features from "./page.data";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import posImage from "../../../../../public/images/pos Image.png"

const page = (): ReactNode => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <motion.div
          className={styles.hero}
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeading}> Boost Your Earnings with Cashmatrix POS</h1>
            <p className={styles.heroDesc}>
              Empower your customers with convenient payment options using the Cashmatrix POS
              machine.
            </p>
            <Link href="/business/pos/request-pos" className={styles.heroLink}>
              <button type="button" className={styles.heroButton}>
                Reguest a POS
                <span className={styles.arrowRight}>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </button>
            </Link>
          </div>
          <div className={styles.heroImage}>
            <Image src={posImage} alt="POS manchine" className={styles.image} />
          </div>
        </motion.div>
      </section>
      <section className={styles.featuresSection}>
        <div className={styles.featuresBox}>
          {features.map((val, i) => (
            <PosFeatureCard key={i} feat={val} />
          ))}
        </div>
      </section>
      <section className={styles.ctaSection}>
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 0, ease: "easeOut" }}>
          <Cta />
        </motion.div>
      </section>
    </main>
  );
};

export default page;
