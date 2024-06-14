import styles from "./cta.module.css";
import PlayStore from "../../../../public/icons/PlayStore";
import AppleStore from "../../../../public/icons/AppleStore";
import Link from "next/link";
import Image from "next/image";

const Cta = () => {
  return (
    <main className={styles.main}>
      <div className={styles.ctaBox}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaHeading}>Move your business forward with Cashmatrix POS</h2>
          <p className={styles.ctaInfo}>
            Download the cashmatrix business app, request for a POS, recieve your POS and and
            expierience easy going business.
          </p>
          <div className={styles.licenses}>
            <Link href="https://play.google.com/store/apps/details?id=com.assetmatrix.cashmatrixBusiness">
              <PlayStore />
            </Link>
            <Link href="https://apps.apple.com/ng/app/cashmatrix-business/id6471409545">
              <AppleStore />
            </Link>
          </div>
        </div>
        <div className={styles.ctaImageBox}>
          <Image src="" alt="call to action images" className={styles.ctaImage} />
        </div>
      </div>
    </main>
  );
};

export default Cta;
