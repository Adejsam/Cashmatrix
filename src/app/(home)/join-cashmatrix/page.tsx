"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import PlayStore from "../../../../public/icons/PlayStore";
import AppleStore from "../../../../public/icons/AppleStore";
import Cbn from "../../../../public/icons/Cbn";
import Ndic from "../../../../public/icons/Ndic";
import joinCashmatrix from "../../../../public/images/join cashmatrix.png";
import 'animate.css';

const page = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div   className={styles.hero}>
          <div className={`${styles.content} animate__animated animate__backInLeft`}>
            <h1 className={styles.heading}>Download The Cashmatrix App and Open an Account Today!!!</h1>
            <p className={styles.description}>
              Click on the Google Play button to download for android or on the App Store button to
              download for ios, follow the on screen prompt to open an account, fund your account and begin to experience seamless banking.
            </p>
            <div className={styles.download}>
              <Link
                href="https://play.google.com/store/search?q=cashmatrix+app&c=apps"
                target="_blank">
                <PlayStore />
              </Link>
              <Link href="https://apps.apple.com/us/app/cashmatrix/id6470770885" target="_blank">
                <AppleStore />
              </Link>
            </div>
            <div className={styles.licenses}>
              <span className={styles.cbn}>
                <Cbn />
              </span>
              <span className={styles.ndic}>
                <Ndic />
              </span>
            </div>
          </div>
          <div className={`${styles.imageBox} animate__animated animate__backInRight`}>
            <Image src={joinCashmatrix} alt="Hero Image" className={styles.image} priority={true}/>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
