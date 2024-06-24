"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { feature1 } from "@/app/(business)/business/discover-business/page.data";
import styles from "./page.module.css";
import { ReactNode } from "react";
import {motion} from "framer-motion";

const FeatureCard = ({ feat1 }: { feat1: feature1 }): ReactNode => {
  return (
    <main className={styles.main}>
      <motion.div className={styles.feature} initial={{scale: 0.8}} whileInView={{scale: 1}} transition={{duration: 1,delay: 0, ease:"easeOut"}}>
        <div className={styles.featureContent}>
          <h2 className={styles.featureHeading}>{feat1.heading}</h2>
          <p className={styles.featureInfo}>{feat1.content}</p>
          <ul className={styles.featureLists}>
            {feat1.listData.length != 0 &&
              feat1.listData.map((val, i) => {
                return (
                  <li className={styles.featureList} key={i}>
                    <span className={styles.check}>
                      <i className={feat1.checkIcon}></i>
                    </span>{" "}
                    {val}
                  </li>
                );
              })}
          </ul>
          <div className={styles.buttonBox}>
            <Link href={feat1.link1} className={styles.featureLink1}>
              {feat1.buttonName1 != "" && (
                <button type="button" className={styles.featureButton1}>
                  {feat1.buttonName1}
                  <span className={styles.arrowRight}>
                    {feat1.arrowIcon != "" && <i className={feat1.arrowIcon}></i>}
                  </span>
                </button>
              )}
            </Link>
            {feat1.link2 && (
            <Link href={feat1.link2} className={styles.featureLink2}>
              {feat1.buttonName2 != "" && (
                <button type="button" className={styles.featureButton2}>
                  {feat1.buttonName2}
                </button>
              )}
            </Link>
            )}
          </div>
        </div>
        <div className={styles.featureImageBox}>
          <Image src={feat1.src} alt={feat1.heading} className={styles.featureImage} />
        </div>
      </motion.div>
    </main>
  );
};

export default FeatureCard;
