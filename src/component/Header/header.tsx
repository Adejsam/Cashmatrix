import styles from "./header.module.css";
import Image from "next/image";
import logo from "/public/images/LogoBanner.png";
import Link from "next/link";

export default function Header() {
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
              <li className={styles.navItem}>
                <Link href="/business" className={styles.navLink}>Business</Link>
                <span className={styles.icon}>
                  <i className="fa-solid fa-caret-down"></i>
                </span>
                {/* Drop Down Menu */}
                <ul className={styles.dropDown}>
                  <Link href="" className={styles.dropDownLink}><li className={styles.dropDownItem}>POS</li></Link>
                  <Link href="" className={styles.dropDownLink}><li className={styles.dropDownItem}>Cooperate Account</li></Link>
                </ul> 
              </li>
              <li className={styles.navItem}>
                <Link href="/company" className={styles.navLink}>Company</Link>
                <span className={styles.icon}>
                  <i className="fa-solid fa-caret-down"></i>
                </span>
                {/* Drop Down Menu */}
                <ul className={styles.dropDown}>
                  <Link href="/company/blog" className={styles.dropDownLink}><li className={styles.dropDownItem}>Blog</li></Link>
                  <Link href="/company/about-us" className={styles.dropDownLink}><li className={styles.dropDownItem}>About Us</li></Link>
                  <Link href="/company/our-team" className={styles.dropDownLink}><li className={styles.dropDownItem}>Our Team</li></Link>
                </ul>
              </li>
              <li className={styles.navItem}>
                <Link href="/help" className={styles.navLink}>Help</Link>
                <span className={styles.icon}>
                  <i className="fa-solid fa-caret-down"></i>
                </span>
                {/* Drop Down Menu */}
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
