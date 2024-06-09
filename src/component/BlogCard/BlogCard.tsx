import styles from "./page.module.css"
import Image from "next/image"


export default function BlogCard () {
  return (
    <main className={styles.main}>
        <div className={styles.blogCard}>
            <div className={styles.blogCardImage}>
                <Image src="" alt="blog image" className={styles.image}/>
            </div>
            <div className={styles.blogCardInfo}>
                <h3 className={styles.blogCardHeading}>Hello Welcome to our First blog this year</h3>
                <small className={styles.blogCardSmall}>
                    <p className={styles.author}>By Cashmatrix</p>
                    <p className={styles.date}>12th May 2025</p>
                </small>
            </div>
        </div>
    </main>
  )
}
