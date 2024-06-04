import styles from "./loading.module.css";
import Image from "next/image";
import LoadingImage from "../../../public/images/website icon.png";

export default async function Loading() {
  // await new Promise(resolve => setTimeout(resolve, 3000));

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.loadingBox}>
          <Image src={LoadingImage} alt="Loading icom" className={styles.image} />
        </div>
      </section>
    </main>
  );
}
