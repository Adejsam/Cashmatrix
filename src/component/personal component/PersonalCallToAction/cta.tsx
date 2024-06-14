import React from 'react'
import styles from "./cta.module.css"
import Link from 'next/link'
import Image from 'next/image'
import AppleStore from '../../../../public/icons/AppleStore'
import PlayStore from '../../../../public/icons/PlayStore'
import ctaImage from "../../../../public/images/cta.png"

const Cta = () => {
  return (
    <main className={styles.main}>
        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaHeading}>Digital Banking At Ease</h3>
            <p className={styles.ctaInfo}>Transfer, spend and save money seamlessly</p>
            <div className={styles.iconBox}>
              <Link href="https://play.google.com/store/search?q=cashmatrix+app&c=apps" target="_blank"><PlayStore /></Link>
              <Link href="https://apps.apple.com/ng/app/cashmatrix/id6470770885" target="_blank"><AppleStore /></Link>
            </div>
          </div>
          <div className={styles.ctaImage}>
            <Image src={ctaImage} alt="call to action image" className={styles.image} />
          </div>
        </div>
    </main>
  )
}

export default Cta