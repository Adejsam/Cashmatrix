import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import apiImage from "../../../../../public/images/payout api image.png";
import Cta from "@/component/BlackCallToAction/cta";

const page = () => {
  return (
    <main className={styles.main}>
      {/* hero section */}
      <section className={styles.section}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeading}>
              Drive your business toward success using the Cashmatrix Payout API.
            </h1>
            <p className={styles.heroInfo}>
              Access sub accounts, full Cashmatrix payment APIs, and enjoy instant settlement for
              agents, plus more!
            </p>
            <Link href="" className={styles.heroLink}>
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
        </div>
      </section>
      {/* features section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresBox}>
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureHeading}>
                Explore, test and build with Casmatrix payout APIs.
              </h2>
              <p className={styles.featureInfo}>
                Cashmatrix payout APIs empower developers to explore, test, and create innovative
                solutions for seamless financial transactions
              </p>
              <div className={styles.buttonBox}>
                <Link href="" className={styles.featureLink}>
                  <button type="button" className={styles.featureButton}>
                    Get Cashmatrix Business
                    <span className={styles.arrowRight}>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className={styles.featureImageBox}>
              <Image
                src=""
                alt="Recieve card payment and transfer"
                className={styles.featureImage}
              />
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureHeading}>
                Accelerate development using Cashmatrix payment services.
              </h2>
              <p className={styles.featureInfo}>
                By integrating with Cashmatrix payout APIs, businesses can enhance their transfer
                processes and offer a more convenient experience to their users
              </p>
              <div className={styles.buttonBox}>
                <Link href="" className={styles.featureLink}>
                  <button type="button" className={styles.featureButton}>
                    Get Cashmatrix Business
                    <span className={styles.arrowRight}>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className={styles.featureImageBox}>
              <Image
                src=""
                alt="Recieve card payment and transfer"
                className={styles.featureImage}
              />
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureHeading}>
                Achieve instant settlement within your agent network.
              </h2>
              <p className={styles.featureInfo}>
                Our payout API enables instant settlement for agency banking aggregators within
                their agent network after every POS transaction therefore, eliminating delays and
                enhancing cash flow.
              </p>
              <div className={styles.buttonBox}>
                <Link href="" className={styles.featureLink}>
                  <button type="button" className={styles.featureButton}>
                    Get Cashmatrix Business
                    <span className={styles.arrowRight}>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className={styles.featureImageBox}>
              <Image
                src=""
                alt="Recieve card payment and transfer"
                className={styles.featureImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/*call to action section */}
      <section className={styles.ctaSection}>
        <Cta />
      </section>
    </main>
  );
};

export default page;
