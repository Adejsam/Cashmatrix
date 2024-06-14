import React from 'react'
import styles from "./cta.module.css"
import Link from 'next/link'
import Image from 'next/image'
import PlayStore from '../../../../public/icons/PlayStore'
import AppleStore from '../../../../public/icons/AppleStore'

const Cta = () => {
  return (
    <main className={styles.main}>
        <div className={styles.ctaBox}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>
              Move your business forward with Cashmatrix Business
            </h2>
            <p className={styles.ctaInfo}>
              Access detailed insights via our comprehensive dashboard, effortlessly track and
              reconcile transactions, monitor sales performance, customize reports, and easily
              export and share statements—all conveniently available where you need them
            </p>
            <div className={styles.licenses}>
              <Link href="https://play.google.com/store/apps/details?id=com.assetmatrix.cashmatrixBusiness"><PlayStore /></Link>
              <Link href="https://apps.apple.com/ng/app/cashmatrix-business/id6471409545"><AppleStore /></Link>
            </div>
          </div>
          <div className={styles.ctaImageBox}>
            <Image src="" alt="call to action images" className={styles.ctaImage} />
          </div>
        </div>
    </main>
  )
}

export default Cta