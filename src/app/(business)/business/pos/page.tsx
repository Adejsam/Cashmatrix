import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import Cta from "@/component/BlackCallToAction/cta";
import PosFeatureCard from "@/component/PosFeatureCard/page";
import features from "./page.data";
import { ReactNode } from "react";

const page = (): ReactNode => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeading}> Boost Your Earnings with Cashmatrix POS</h1>
            <p className={styles.heroDesc}>
              Empower your customers with convenient payment options using the Cashmatrix POS
              machine.
            </p>
            <Link href="/help/get-help" className={styles.featureLink}>
              <button type="button" className={styles.featureButton}>
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
        </div>
      </section>
      <section className={styles.featuresSection}>
        <div className={styles.featuresBox}>{features.map((val, i) => (
          <PosFeatureCard key={i} feat={val}/>
        ))}
        </div>
      </section>
      <section className={styles.getPosSection}>
        <h2 className={styles.getPosHeading}>How to get your POS</h2>
        <div className={styles.getPosContainer}>
          <ul className={styles.getPosLists}>
            <li className={styles.getPosList}>
              <span className={styles.number}>1</span>
              <div className={styles.getPosBox}>
                <h4 className={styles.getPosBoxHeading}>Create a business account and log in</h4>
                <p className={styles.getPosInfo}>
                  Simply provide the necessary details, and your business account will be instantly
                  created. Afterward, log in to your business dashboard and access the POS menu.
                </p>
              </div>
            </li>
            <li className={styles.getPosList}>
              <span className={styles.number}>2</span>
              <div className={styles.getPosBox}>
                <h4 className={styles.getPosBoxHeading}> Request a new POS</h4>
                <p className={styles.getPosInfo}>
                  Click on Request POS and follow the displayed instruction.
                </p>
              </div>
            </li>
            <li className={styles.getPosList}>
              <span className={styles.number}>3</span>
              <div className={styles.getPosBox}>
                <h4 className={styles.getPosBoxHeading}>Fund your account and pay for the POS</h4>
                <p className={styles.getPosInfo}>
                  Fund your newly created Business Account with a minimum of ₦21,500 for the POS
                  Terminal and complete the request. The ₦21,500 covers a ₦10,000 caution fee,
                  ₦10,000 logistics fee, and ₦1,500 insurance fee for 1 year
                </p>
              </div>
            </li>
            <li className={styles.getPosList}>
              <span className={styles.number}>4</span>
              <div className={styles.getPosBox}>
                <h4 className={styles.getPosBoxHeading}> Get your POS delivered in 48 hours</h4>
                <p className={styles.getPosInfo}>
                  Upon sign-up, you’ll be assigned a dedicated Relationship Manager from Cashmatrix.
                  They’ll promptly deliver the POS terminal within 48 hours, provide training on how to use the POS, and
                  address any queries you might have.
                </p>
              </div>
            </li>
          </ul>
          <div className={styles.getPosImage}>
            <Image src="" alt="POS Image"/>
            <Image src="" alt="POS Image"/>
            <Image src="" alt="POS Image"/>
            <Image src="" alt="POS Image"/>
          </div>
        </div>
      </section>
      <section className={styles.ctaSection}>
        <Cta />
      </section>
    </main>
  );
};

export default page;
