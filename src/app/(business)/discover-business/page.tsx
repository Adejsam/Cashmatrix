import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Cbn from "../../../../public/icons/Cbn";
import Ndic from "../../../../public/icons/Ndic";
import businessHero from "../../../../public/images/business hero image.png";
import ServicesCard from "@/component/ServiceCard/page";

const page = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeading}>Your Everyday business management solution</h1>
            <p className={styles.heroInfo}>
              Streamline your business: invoice clients, Recieve POS payments, settle bills, execute
              bulk transfers, and reclaim precious time for other pursuits.
            </p>
            <Link href="" className={styles.heroLink}>
              <button type="button" className={styles.heroButton}>
                Open Cashmatrix Business Account
                <span className={styles.arrowRight}>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </button>
            </Link>
            <div className={styles.licenses}>
              <Ndic />
              <Cbn />
            </div>
          </div>
          <div className={styles.heroImageBox}>
            <Image src={businessHero} alt="hero image" className={styles.heroImage} />
          </div>
        </div>
      </section>

      {/* feature section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresBox}>
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureHeading}>Open a Cashmatrix Business account with no paperwork</h2>
              <p className={styles.featureInfo}> Setup an account anytime and anywhere. All you need in your:</p>
              <ul className={styles.featureLists}>
                <li className={styles.featureList}> 
                <span className={styles.check}><i className="fa-solid fa-check"></i></span> CAC (Customer acquisition cost) 
                </li>
                <li className={styles.featureList}> 
                <span className={styles.check}><i className="fa-solid fa-check"></i></span> CAC (Customer acquisition cost) 
                </li>
                <li className={styles.featureList}> 
                <span className={styles.check}><i className="fa-solid fa-check"></i></span> CAC (Customer acquisition cost) 
                </li>
              </ul>
              <Link href="" className={styles.featureLink}>
                <button type="button" className={styles.featureButton}>
                  Open Cashmatrix Business Account
                  <span className={styles.arrowRight}>
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </button>
              </Link>
            </div>
            <Image src="" alt="" className={styles.featureImage}/>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureHeading}></h2>
              <p className={styles.featureInfo}></p>
            </div>
            <Image src="" alt="" className={styles.featureImage}/>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureHeading}></h2>
              <p className={styles.featureInfo}></p>
            </div>
            <Image src="" alt="" className={styles.featureImage}/>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
