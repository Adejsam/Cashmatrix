"use client";

import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import Cta from "@/component/POS component/BlackCallToAction/cta";
import PosFeatureCard from "@/component/POS component/PosFeatureCard/page";
import features from "./page.data";
import { ReactNode } from "react";
import { motion } from "framer-motion";

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
            <Image src="" alt="POS manchine" className={styles.image} />
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
      <section className={styles.getPosSection}>
        <motion.h2
          className={styles.getPosHeading}
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, delay: 0, ease: "easeOut" }}>
          How to get your POS
        </motion.h2>
        <div className={styles.getPosContainer}>
          <motion.ul
            className={styles.getPosLists}
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, delay: 0, ease: "linear" }}>
            <motion.li
              className={styles.getPosList}
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, delay: 0, ease: "linear" }}>
              <span className={styles.number}>1</span>
              <div className={styles.getPosBox}>
                <h4 className={styles.getPosBoxHeading}>Create a business account and log in</h4>
                <p className={styles.getPosInfo}>
                  Simply provide the necessary details, and your business account will be instantly
                  created. Afterward, log in to your business dashboard and access the POS menu.
                </p>
              </div>
            </motion.li>
            <motion.li
              className={styles.getPosList}
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "linear" }}>
              <span className={styles.number}>2</span>
              <div className={styles.getPosBox}>
                <h4 className={styles.getPosBoxHeading}> Request a new POS</h4>
                <p className={styles.getPosInfo}>
                  Click on Request POS and follow the displayed instruction.
                </p>
              </div>
            </motion.li>
            <motion.li
              className={styles.getPosList}
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "linear" }}>
              <span className={styles.number}>3</span>
              <div className={styles.getPosBox}>
                <h4 className={styles.getPosBoxHeading}>Fund your account and pay for the POS</h4>
                <p className={styles.getPosInfo}>
                  Fund your newly created Business Account with a minimum of ₦21,500 for the POS
                  Terminal and complete the request. The ₦21,500 covers a ₦10,000 caution fee,
                  ₦10,000 logistics fee, and ₦1,500 insurance fee for 1 year
                </p>
              </div>
            </motion.li>
            <motion.li
              className={styles.getPosList}
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: "linear" }}>
              <span className={styles.number}>4</span>
              <div className={styles.getPosBox}>
                <h4 className={styles.getPosBoxHeading}> Get your POS delivered in 48 hours</h4>
                <p className={styles.getPosInfo}>
                  Upon sign-up, you’ll be assigned a dedicated Relationship Manager from Cashmatrix.
                  They’ll promptly deliver the POS terminal within 48 hours, provide training on how
                  to use the POS, and address any queries you might have.
                </p>
              </div>
            </motion.li>
          </motion.ul>
          <div className={styles.getPosImage}>
            <motion.div
              initial={{ opacity: 0.5, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0, ease: "easeOut" }}>
              <Image src="" alt="POS Image" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0.5, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0, ease: "easeOut" }}>
              <Image src="" alt="POS Image" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0.5, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}>
              <Image src="" alt="POS Image" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0.5, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}>
              <Image src="" alt="POS Image" />
            </motion.div>
          </div>
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
