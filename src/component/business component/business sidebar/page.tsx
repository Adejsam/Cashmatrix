import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import posIcon from "../../../../public/icons/pos icon.png";
import { useState } from "react";
import "animate.css";
import HeaderLinks from "@/component/personal component/PersonalHeader/header_data";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const toggleMenu = (label: string) => {
    setIsOpen(isOpen === label ? null : label);
  };

  return (
    <main className={styles.main}>
      <ul className={`${styles.navItems} animate__animated animate__slideInRight`}>
        <div className={styles.buttonBox}>
          <Link href="/join-cashmatrix" className={styles.buttonLink}>
            <button className={styles.button} id={styles.signUp}>
              Create Account
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
              <div className={styles.navHead}>
                <Link href={val.link} className={styles.navLink}>
                  {val.label}
                </Link>
                <span className={styles.icon} onClick={() => toggleMenu(val.label)}>
                  <i className={val.icon}></i>
                </span>
              </div>

              {/*Drop Down Menu */}
              {val.children.length == 0 ||
                (isOpen === val.label && (
                  <ul className={styles.dropDown}>
                    {val.children.map((val1) => {
                      return (
                        <Link key={val1.label} href={val1.link} className={styles.dropDownLink}>
                          <li className={styles.dropDownItem}>
                            <span className={styles.listSpan}>
                              { val1.icon && <i className={val1.icon}></i>}
                              { val1.iconPath && <Image src={val1.iconPath} alt={val1.label} width={16} height={16} className={styles.iconImage}/>}
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
