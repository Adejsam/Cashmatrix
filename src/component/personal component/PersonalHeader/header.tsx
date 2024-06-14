"use client";

import styles from "./header.module.css";
import Image from "next/image";
import logo from "../../../../public/images/Personal logo.png";
import Link from "next/link";
import posIcon from "../../../../public/icons/pos icon.png";
import React, { useEffect, useState } from "react";

const PersonalHeader: React.FC = () => {
  const [menuOpen, isMenuOpen] = useState(true);

  const toggleMenu = () =>{
    isMenuOpen(!menuOpen)
  }

  useEffect(()=>{
    if (window.screen.availWidth > 700) { // desktop
      isMenuOpen(false);
    }else { // mobile
      isMenuOpen(false);
    }
  },[]);

  return (
    <header className={styles.header}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <Link href="/">
              <Image src={logo} alt="cashmatrix logo" className={styles.logo} />
            </Link>
            {menuOpen && (
              <ul className={styles.navItems}>
                <li className={styles.navItem}>
                  <Link href="/personal" className={styles.navLink}>
                    Personal
                  </Link>
                </li>
                <li className={styles.navItem}>
                  {" "}
                  Business
                  <span className={styles.icon}>
                    <i className="fa-solid fa-caret-down"></i>
                  </span>
                  {/* Business Drop Down Menu */}
                  <ul className={styles.dropDown}>
                    <Link
                      href="/business/discover-business"
                      target="_blank"
                      className={styles.dropDownLink}>
                      <li className={styles.dropDownItem}>
                        <span className={styles.listSpan} id={styles.icon1}>
                          <i className="fa-solid fa-building-columns"></i>
                        </span>
                        Discover Business
                      </li>
                    </Link>
                    <Link
                      href="/business/payout-API"
                      target="_blank"
                      className={styles.dropDownLink}>
                      <li className={styles.dropDownItem}>
                        <span className={styles.listSpan} id={styles.icon2}>
                          <i className="fa-solid fa-wallet"></i>
                        </span>
                        Payout API
                      </li>
                    </Link>
                    <Link href="/business/pos" target="_blank" className={styles.dropDownLink}>
                      <li className={styles.dropDownItem}>
                        <span className={styles.listSpan} id={styles.icon3}>
                          <Image src={posIcon} alt="pos icon" className={styles.image} />
                        </span>
                        POS
                      </li>
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
                      <li className={styles.dropDownItem}>
                        <span className={styles.listSpan} id={styles.icon1}>
                          <i className="fa-solid fa-address-card"></i>
                        </span>
                        About Us
                      </li>
                    </Link>
                    <Link href="/company/blog" className={styles.dropDownLink}>
                      <li className={styles.dropDownItem}>
                        <span className={styles.listSpan} id={styles.icon2}>
                          <i className="fa-solid fa-blog"></i>
                        </span>
                        Blog
                      </li>
                    </Link>
                    <Link href="/company/join-our-team" className={styles.dropDownLink}>
                      <li className={styles.dropDownItem}>
                        <span className={styles.listSpan} id={styles.icon3}>
                          <i className="fa-solid fa-user-plus"></i>
                        </span>
                        Join Our Team
                      </li>
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
                      <li className={styles.dropDownItem}>
                        <span className={styles.listSpan} id={styles.icon1}>
                          <i className="fa-brands fa-hire-a-helper"></i>
                        </span>
                        Get Help
                      </li>
                    </Link>
                    <Link href="/help/faqs" className={styles.dropDownLink}>
                      <li className={styles.dropDownItem}>
                        <span className={styles.listSpan} id={styles.icon2}>
                          <i className="fa-solid fa-circle-question"></i>
                        </span>
                        FAQs
                      </li>
                    </Link>
                    <Link href="/help/contact-us" className={styles.dropDownLink}>
                      <li className={styles.dropDownItem}>
                        <span className={styles.listSpan} id={styles.icon3}>
                          <i className="fa-solid fa-address-book"></i>
                        </span>
                        Contact Us
                      </li>
                    </Link>
                  </ul>
                </li>
              </ul>
            )}
          </div>
          {menuOpen && (
            <div className={styles.buttonBox}>
              <Link href="/join-cashmatrix" className={styles.buttonLink}>
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
          )}
          <div className={styles.barsIcon} onClick={toggleMenu}>
            {menuOpen ? (
              <span className={styles.bars}>
                <i className="fa-solid fa-x"></i>
              </span>
            ) : (
              <span className={styles.bars}>
                <i className="fa-solid fa-bars"></i>
              </span>
            )}
          </div>
        </div>
      </section>
    </header>
  );
};

export default PersonalHeader;
