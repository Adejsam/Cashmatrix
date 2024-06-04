import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import PlayStore from "../../../../../public/icons/PlayStore";
import AppleStore from "../../../../../public/icons/AppleStore";
import ctaImage from "../../../../public/images/cta.png";

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
              Banking at ease{'"'} encapsulates this goal, and we{"'"}re committed to delivering on
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
          <p className={styles.otherAboutInfo}>
            With our user-friendly mobile app, you can manage your accounts, transfer funds, and pay
            bills from the comfort of your home or office.
          </p>
          <p className={styles.otherAboutInfo}>
            Our dedicated team is committed to understanding your unique needs. We tailor our
            services to fit your lifestyle and financial goals.
          </p>
          <p className={styles.otherAboutInfo}>
            we are deeply rooted in the community. We support local businesses and initiatives,
            contributing to the growth and prosperity of our neighbors. So no matter who you are or where you live in Nigeria, we’re here because of you.
          </p>
        </div>
        <div className={styles.foundersBox}>
          <div className={styles.founder}>
            <Image src="" alt="founders Image" className={styles.founderImage} />
            <h5 className={styles.name}>lorem Ipsum</h5>
            <h5 className={styles.title}>CEO & Co-Founder</h5>
          </div>
          <div className={styles.founder}>
            <Image src="" alt="Founder Image" className={styles.founderImage}/>
            <h5 className={styles.name}>lorem Ipsum</h5>
            <h5 className={styles.title}>CTO & Co-Founder</h5>
          </div>
        </div>
        <div className={styles.mvBox}>
          <div className={styles.missionBox}>
            <h4 className={styles.missionHeading}>Mission</h4>
            <span className={styles.icon}>
              <i className="fa-solid fa-earth-americas"></i>
            </span>
            <p className={styles.mission}>
              To economically empower micro-entrepreneurs and low income earners by providing
              financial services through passionate people and the best technology in a manner that
              meets expectation of all stakeholders
            </p>
          </div>
          <div className={styles.visionBox}>
            <h4 className={styles.visionHeading}>Vision</h4>
            <span className={styles.icon}>
              <i className="fa-solid fa-eye"></i>
            </span>
            <p className={styles.vision}>
              To be the market leader in the provision of microfinance and related financial
              services in the sub-financial sector of Nigeria .
            </p>
          </div>
          <div className={styles.coreBox}>
            <h4 className={styles.coreHeading}>Core Values</h4>
            <span className={styles.icon}><i className="fa-solid fa-hands-holding-circle"></i></span>
            <p className={styles.coreDesc}>Our operations and conduct shall be guided by our core value <span className={styles.bold}>{'"'}SMART{'"'}</span></p>
            <ul className={styles.coreValues}>
              <li className={styles.coreValue}>Services at high Quality</li>
              <li className={styles.coreValue}>Resilience on Challenges</li>
              <li className={styles.coreValue}>Attitude & Dilligency</li>
              <li className={styles.coreValue}>Maturity & Resolutions</li>
              <li className={styles.coreValue}>Trust and Integrity</li>
            </ul>
          </div>
        </div>
        <div className={styles.cta} id="cta">
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaHeading}>Banking At Ease</h3>
            <p className={styles.ctaInfo}>Transfer, spend and save money seamlessly</p>
            <div className={styles.iconBox}>
              <Link href="https://play.google.com/store/search?q=cashmatrix+app&c=apps" target="_blank"></Link><PlayStore />
              <Link href="https://apps.apple.com/us/app/cashmatrix/id6470770885" target="_blank"></Link><AppleStore />
            </div>
          </div>
          <div className={styles.ctaImage}>
            <Image src={ctaImage} alt="call to action image" className={styles.image} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
