import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import posIcon from "../../../../public/icons/pos icon.png";
import React, { useState } from "react";
import "animate.css";
import HeaderLinks from "../PersonalHeader/header_data";

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className={styles.main}>
      <ul className={`${styles.navItems} animate__animated animate__slideInRight`}>
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

        {HeaderLinks.map((val) => {
          return (
            <li className={styles.navItem} key={val.label}>
              <Link href={val.link} className={styles.navLink}>
                {val.label}
              </Link>
              <span className={styles.icon} onClick={toggleMenu}>
                <i className={val.icon}></i>
              </span>

              {/*Drop Down Menu */}
              {val.children.length == 0 || 
                (isOpen && (
                  <ul className={styles.dropDown}>
                    {val.children.map((val1) => {
                      return (
                        <Link key={val1.label} href={val1.link} className={styles.dropDownLink}>
                          <li className={styles.dropDownItem}>
                            <span className={styles.listSpan} id={`styles.${val1.iconId}`}>
                              <i className={val1.icon}></i>
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
  );
};

export default SideBar;
