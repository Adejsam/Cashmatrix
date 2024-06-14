"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import apiImage from "../../../../../public/images/payout api image.png";
import Cta from "@/component/POS component/BlackCallToAction/cta";
import { motion } from "framer-motion";
import apiFeatures from "./page.data";
import ApiFeatureCard from "@/component/Api component/ApiFeatureCard/page";
import { ReactNode } from "react";

const page = (): ReactNode => {
  return (
    <main className={styles.main}>
      {/* hero section */}
      <section className={styles.section}>
        <motion.div
          className={styles.hero}
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeading}>
              Drive your business toward success using the Cashmatrix Payout API.
            </h1>
            <p className={styles.heroInfo}>
              Access sub accounts, full Cashmatrix payment APIs, and enjoy instant settlement for
              agents, plus more!
            </p>
            <Link href="/business/create-account" className={styles.heroLink}>
              <button type="button" className={styles.heroButton}>
                Get Cashmatrix Business
                <span className={styles.arrowRight}>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </button>
            </Link>
          </div>
          <div className={styles.heroImageBox}>
            <Image src={apiImage} alt="Payout api Image" className={styles.heroImage} />
          </div>
        </motion.div>
      </section>
      {/* features section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresBox}>
          {apiFeatures.map((val, i) => (
            <ApiFeatureCard key={i} apiFeat={val} />
          ))}
        </div>
      </section>

      {/*call to action section */}
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
