import styles from "./header.module.css";
import Image from "next/image";
import logo from "../../../public/images/Personal logo.png";
import Link from "next/link";

export default function PersonalHeader() {
  return (
    <header className={styles.header}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <Link href="/"><Image src={logo} alt="cashmatrix logo" className={styles.logo} /></Link>
            <ul className={styles.navItems}>
              <li className={styles.navItem}>
                <Link href="/personal" className={styles.navLink}>Personal</Link>
              </li>
              <li className={styles.navItem}>Business
                <span className={styles.icon}>
                  <i className="fa-solid fa-caret-down"></i>
                </span>
                {/* Business Drop Down Menu */}
                <ul className={styles.dropDown}>
                  <Link href="/business/discover-business" target="_blank" className={styles.dropDownLink}><li className={styles.dropDownItem}>Discover Business</li></Link>
                  <Link href="/business/payout-API" target="_blank" className={styles.dropDownLink}><li className={styles.dropDownItem}>Payout API</li></Link>
                  <Link href="/business/pos" target="_blank" className={styles.dropDownLink}><li className={styles.dropDownItem}>POS</li></Link>
                </ul> 
              </li>
              <li className={styles.navItem}>Company
                <span className={styles.icon}>
                  <i className="fa-solid fa-caret-down"></i>
                </span>
                {/* Company Drop Down Menu */}
                <ul className={styles.dropDown}>
                  <Link href="/comapny/about-us" className={styles.dropDownLink}><li className={styles.dropDownItem}>About Us</li></Link>
                  <Link href="/company/blog" className={styles.dropDownLink}><li className={styles.dropDownItem}>Blog</li></Link>
                  <Link href="/company/join-our-team" className={styles.dropDownLink}><li className={styles.dropDownItem}>Join Our Team</li></Link>
                </ul>
              </li>
              <li className={styles.navItem}>Help
                <span className={styles.icon}>
                  <i className="fa-solid fa-caret-down"></i>
                </span>
                {/*Help Drop Down Menu */}
                <ul className={styles.dropDown}>
                  <Link href="/help/get-help" className={styles.dropDownLink}><li className={styles.dropDownItem}>Get Help</li></Link>
                  <Link href="/help/faqs" className={styles.dropDownLink}><li className={styles.dropDownItem}>FAQs</li></Link>
                  <Link href="/help/contact-us" className={styles.dropDownLink}><li className={styles.dropDownItem}>Contact Us</li></Link>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.buttonBox}>
            <Link href={"https://cashmatrix.app/"} target="_blank" className={styles.buttonLink}>
              <button className={styles.button} id={styles.signUp}>
                Join Cashmatrix
              </button>
            </Link>
            <Link href={"https://cashmatrix.app/"} target="_blank" className={styles.buttonLink}>
              <button className={styles.button} id={styles.signIn}>
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
}
