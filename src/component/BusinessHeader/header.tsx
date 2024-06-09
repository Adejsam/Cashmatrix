import styles from "./header.module.css";
import Image from "next/image";
import logo from "../../../public/images/Business logo.png";
import Link from "next/link";
import posIcon from "../../../public/icons/pos icon.png";

export default function BusinessHeader() {
  return (
    <header className={styles.header}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <Link href="business/discover-business">
              <Image src={logo} alt="cashmatrix logo" className={styles.logo} />
            </Link>
            <ul className={styles.navItems}>
              <li className={styles.navItem}>
                <Link href="/personal" className={styles.navLink}>
                  Personal
                </Link>
              </li>
              <li className={styles.navItem}>
                Business
                <span className={styles.icon}>
                  <i className="fa-solid fa-caret-down"></i>
                </span>
                {/* Business Drop Down Menu */}
                <ul className={styles.dropDown}>
                  <Link href="/business/discover-business" className={styles.dropDownLink}>
                    {" "}
                    <li className={styles.dropDownItem}>
                      <span className={styles.listSpan} id={styles.icon1}>
                        <i className="fa-solid fa-building-columns"></i>
                      </span>
                      Discover Business</li>
                  </Link>
                  <Link href="/business/payout-API" className={styles.dropDownLink}>
                    <li className={styles.dropDownItem}><span className={styles.listSpan} id={styles.icon2}><i className="fa-solid fa-wallet"></i></span>Payout API</li>
                  </Link>
                  <Link href="/business/pos" className={styles.dropDownLink}>
                    <li className={styles.dropDownItem}><span className={styles.listSpan} id={styles.icon3}><Image src={posIcon} alt="pos icon" className={styles.image}/></span>POS</li>
                  </Link>
                </ul>
              </li>
              <li className={styles.navItem}>
                Company
                <span className={styles.icon}>
                  <i className="fa-solid fa-caret-down"></i>
                </span>
                {/* Company Drop Down Menu */}
                <ul className={styles.dropDown}>
                  <Link href="/company/about-us" className={styles.dropDownLink}>
                    <li className={styles.dropDownItem}><span className={styles.listSpan} id={styles.icon1}><i className="fa-solid fa-address-card"></i></span>About Us</li>
                  </Link>
                  <Link href="/company/blog" className={styles.dropDownLink}>
                    <li className={styles.dropDownItem}><span className={styles.listSpan} id={styles.icon2}><i className="fa-solid fa-blog"></i></span>Blog</li>
                  </Link>
                  <Link href="/company/join-our-team" className={styles.dropDownLink}>
                    <li className={styles.dropDownItem}><span className={styles.listSpan} id={styles.icon3}><i className="fa-solid fa-user-plus"></i></span>Join Our Team</li>
                  </Link>
                </ul>
              </li>
              <li className={styles.navItem}>
                Help
                <span className={styles.icon}>
                  <i className="fa-solid fa-caret-down"></i>
                </span>
                {/*Help Drop Down Menu */}
                <ul className={styles.dropDown}>
                  <Link href="/help/get-help" className={styles.dropDownLink}>
                    <li className={styles.dropDownItem}><span className={styles.listSpan} id={styles.icon1}><i className="fa-brands fa-hire-a-helper"></i></span>Get Help</li>
                  </Link>
                  <Link href="/help/faqs" className={styles.dropDownLink}>
                    <li className={styles.dropDownItem}><span className={styles.listSpan} id={styles.icon2}><i className="fa-solid fa-circle-question"></i></span>FAQs</li>
                  </Link>
                  <Link href="/help/contact-us" className={styles.dropDownLink}>
                    <li className={styles.dropDownItem}><span className={styles.listSpan} id={styles.icon3}><i className="fa-solid fa-address-book"></i></span>Contact Us</li>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.buttonBox}>
            <Link href={"https://cashmatrix.app/"} target="_blank" className={styles.buttonLink}>
              <button className={styles.button} id={styles.signUp}>
                Create an Account
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
