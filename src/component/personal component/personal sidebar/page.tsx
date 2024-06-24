"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "animate.css";
import HeaderLinks from "../PersonalHeader/header_data";

function SideBar({ displayNavBar, callBank }: { displayNavBar: boolean; callBank: Function }) {
  const [displayNav, setDisplayNav] = useState<boolean>(displayNavBar);
  const [isOpen, setIsOpen] = useState<string>("");

  useEffect(() => {
    setDisplayNav(displayNavBar);
  }, [displayNavBar]);

  function displayNavigationBar() {
    callBank();
  }

  function toggleDropdown(label: string) {
    setIsOpen(label);
  }

  return (
    displayNav && (
      <main className={styles.main}>
        <ul className={`${styles.navItems} animate__animated animate__slideInRight`}>
          <div className={styles.buttonBox}>
            <Link
              href="/join-cashmatrix"
              className={styles.buttonLink}
              onClick={() => displayNavigationBar()}>
              <button className={styles.button} id={styles.signUp}>
                Join Cashmatrix
              </button>
            </Link>
            <Link
              href={"https://cashmatrix.app/"}
              target="_blank"
              className={styles.buttonLink}
              onClick={() => displayNavigationBar()}>
              <button className={styles.button} id={styles.signIn}>
                Sign in
              </button>
            </Link>
          </div>

          {HeaderLinks.map((val) => {
            return (
              <li className={styles.navItem} key={val.label}>
                <div className={styles.navHead}>
                  {val.link ? (
                    <Link
                      href={val.link}
                      className={styles.navLink}
                      onClick={() => displayNavigationBar()}>
                      {val.label}
                    </Link>
                  ) : (
                    <p className={styles.navLink} onClick={() => toggleDropdown(val.label)}>
                      {val.label}
                    </p>
                  )}
                  {val.icon && (
                    <span className={styles.icon} onClick={() => toggleDropdown(val.label)}>
                      <i className={val.icon}></i>
                    </span>
                  )}
                </div>

                {/*Drop Down Menu */}
                {val.children.length == 0 ||
                  (isOpen === val.label && (
                    <ul className={styles.dropDown}>
                      {val.children.map((val1) => {
                        return (
                          <Link
                            key={val1.label}
                            href={val1.link}
                            className={styles.dropDownLink}
                            onClick={() => displayNavigationBar()}>
                            <li className={styles.dropDownItem}>
                              <span className={styles.listSpan}>
                                {val1.icon && <i className={val1.icon}></i>}
                                {val1.iconPath && (
                                  <Image
                                    src={val1.iconPath}
                                    alt={val1.label}
                                    width={14}
                                    height={14}
                                    className={styles.iconImage}
                                  />
                                )}
                              </span>
                              {val1.label}
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  ))}
              </li>
            );
          })}
        </ul>
      </main>
    )
  );
}

export default SideBar;
