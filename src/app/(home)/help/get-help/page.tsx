import styles from "./page.module.css";
import Link from "next/link";
import liveChat from "../../../../../public/icons/live-chat.png"
import Image from "next/image";

const Page = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading}>Cashmatrix Help</h1>
          <h1 className={styles.heroHeading2}>We are always here to help</h1>
          <p className={styles.heroDesc}>Find the solutions and answers you’re seeking for any issues or questions you might
            have. Our Help Center is available to offer support and guidance. 😊</p>
        </div>
        <div className={styles.getHelpBoxes}>
          <div className={styles.getHelpBox}>
            <h4 className={styles.getHelpHeading}>Talk to us</h4>
            <p className={styles.getHelpContent}>
              If you have any inquiries or need assistance with Customer Service, feel free to give
              us a call
            </p>
            <div className={styles.getHelpLinkBox}>
              <span className={styles.icon}>
                <i className="fa-solid fa-phone-volume"></i>
              </span>
              <Link className={styles.getHelpLink} href="tel:+234(0)81 7947 0991 ">
                +234(0)81 7947 0991
              </Link>{" "}
            </div>
          </div>
          <div className={styles.getHelpBox}>
            <h4 className={styles.getHelpHeading}>Email us </h4>
            <p className={styles.getHelpContent}>
              If you have any inquiries or need assistance with Customer Service, feel free to send
              an email to us
            </p>
            <div className={styles.getHelpLinkBox}>
              <span className={styles.icon}>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <Link className={styles.getHelpLink} href="mailto:hello@cashmatrix.ng">
                hello@cashmatrix.ng
              </Link>{" "}
            </div>
          </div>
          <div className={styles.getHelpBox}>
            <h4 className={styles.getHelpHeading}>Chat with us</h4>
            <p className={styles.getHelpContent}>
              If you have any inquiries or need assistance with Customer Service, feel free to text
              us on watsapp or use the Cashmatrix live chat feature
            </p>
            <div className={styles.getHelpLinkBox}>
              <span className={styles.icon}>
                <i className="fa-brands fa-whatsapp"></i>
              </span>
              <Link
                className={styles.getHelpLink}
                href="https://api.whatsapp.com/send?phone=08179470991">
                Watsapp us
              </Link>
            </div>
            <div className={styles.getHelpLinkBox}>
              <span className={styles.icon}>
                <Image src={liveChat} alt="live chat icon" className={styles.image}/>
              </span>
              <Link
                className={styles.getHelpLink}
                href="https://play.google.com/store/apps/details?id=com.assetcashmatrix.mfb" target="_blank">
                live Chat with us
              </Link>
            </div>
          </div>
        </div>
        <Link href="/help/contact-us" className={styles.otherHelpLink}>
          <div className={styles.otherHelpBox}>
            <p className={styles.otherHelpContent}>You can also fill the online form </p>
            <span className={styles.otherHelpIcon}><i className="fa-solid fa-chevron-right"></i></span>
          </div>
        </Link>
        <Link href="/help/faqs" className={styles.otherHelpLink}>
        <div className={styles.otherHelpBox}>
            <p className={styles.otherHelpContent}>You can also check the FAQs</p>
            <span className={styles.otherHelpIcon}><i className="fa-solid fa-chevron-right"></i></span>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default Page;
