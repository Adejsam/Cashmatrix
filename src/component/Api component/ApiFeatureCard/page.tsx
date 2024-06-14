"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { apiFeature } from "@/app/(business)/business/payout-API/page.data";
import { ReactNode } from "react";

const ApiFeatureCard = ({ apiFeat }: { apiFeat: apiFeature }): ReactNode => {
  return (
    <main className={styles.main}>
      <motion.div
        className={styles.feature}
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 0, ease: "easeOut" }}>
        <div className={styles.featureContent}>
          <h2 className={styles.featureHeading}>{apiFeat.heading}</h2>
          <p className={styles.featureInfo}>{apiFeat.content}</p>
          <div className={styles.buttonBox}>
            <Link href={apiFeat.link} className={styles.featureLink}>
              <button type="button" className={styles.featureButton}>
                {apiFeat.buttonName}
                <span className={styles.arrowRight}>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.featureImageBox}>
          <Image src={apiFeat.src} alt={apiFeat.heading} className={styles.featureImage} />
        </div>
      </motion.div>
    </main>
  );
};

export default ApiFeatureCard;
