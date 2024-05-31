import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import PlayStore from "../../../../public/icons/PlayStore";
import AppleStore from "../../../../public/icons/AppleStore";

const Page = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroHeading}>About Cashmatrix</h2>
            <p className={styles.heroInfo}>
              Welcome to Cashmatrix, the premier digital banking platform in Nigeria. Our goal is to
              revolutionize the banking experience by making it more accessible and convenient for
              everyone. We understand the challenges and frustrations that people go through to
              access services that should otherwise have been readily accessible to them, which is
              why we set out to create a solution that simplifies the process. Our slogan {'"'}
              Banking at ease{'"'}encapsulates this goal, and we{"'"}re committed to delivering on
              it everyday.
            </p>
            <Link href="#cta" className={styles.buttonLink}>
              <button className={styles.joinButton}>Join Cashmatrix</button>
            </Link>
          </div>
          <div className={styles.heroImage}>
            <Image src="" alt="Hero Image" className={styles.heroImage} />
          </div>
        </div>
        <div className={styles.otherAbout}>
          <h3 className={styles.otherAboutHeading}>We bring banking to your doorstep</h3>
          <p className={styles.otherAboutInfo}>
            We understand how busy life can get, and we want to make sure that banking doesn{"'"}t
            get in the way. Our app makes banking hassle-free, so you can go about your day without
            worrying about your finances.
          </p>
        </div>
        <div className={styles.cta} id="cta">
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaHeading}>Banking At Ease</h3>
            <p className={styles.ctaInfo}>Transfer, spend and save money seamlessly</p>
            <div className={styles.iconBox}>
              <PlayStore />
              <AppleStore />
            </div>
          </div>
          <div className={styles.ctaImage}>
            <Image src="" alt="call to action image" className={styles.image}/>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
