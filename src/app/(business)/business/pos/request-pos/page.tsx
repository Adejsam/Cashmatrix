import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import PlayStore from "../../../../../../public/icons/PlayStore";
import AppleStore from "../../../../../../public/icons/AppleStore";
import Cbn from "../../../../../../public/icons/Cbn";
import Ndic from "../../../../../../public/icons/Ndic";
import 'animate.css';
import posImage from "../../../../../../public/images/pos Image.png"

const page = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <div className={`${styles.content} animate__animated animate__backInLeft`}>
            <h1 className={styles.heading}>Download The Cashmatrix Business App and Request For a POS Toaday!!!</h1>
            <p className={styles.description}>
              Click on the Google Play button to download for android or on the App Store button to
              download for ios, follow the on screen prompt to open an account, request for a pos on the app and enjoy seamless transaction
            </p>
            <div className={styles.download}>
              <Link
                href="https://play.google.com/store/apps/details?id=com.assetmatrix.cashmatrixBusiness"
                target="_blank">
                <PlayStore />
              </Link>
              <Link href="https://apps.apple.com/ng/app/cashmatrix-business/id6471409545" target="_blank">
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
            <Image src={posImage} alt="Hero Image" className={styles.image} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
