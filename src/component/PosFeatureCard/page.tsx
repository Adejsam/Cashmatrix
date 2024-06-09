import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import { feature } from "@/app/(business)/business/pos/page.data";
import { ReactNode } from "react";

const PosFeatureCard = ({feat }: {feat: feature}) : ReactNode => {
  return (
    <main className={styles.main}>
      <div className={styles.feature}>
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
      </div>
    </main>
  );
};

export default PosFeatureCard;
