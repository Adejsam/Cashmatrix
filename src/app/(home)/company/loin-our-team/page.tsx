import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className={styles.main}>
        <section className={styles.section}>
            < div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroHeading}>Join Our Team </h1>
                    <p className={styles.heroInfo}>Digital Banking at Ease</p>
                </div>
                <div className={styles.heroImageBox}>
                    <Image src="" alt="hero Image" className={styles.heroImage}/>
                </div>
            </div>
        </section>
    </main>
  )
}

export default page