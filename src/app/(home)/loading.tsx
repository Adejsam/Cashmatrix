import styles from "./loading.module.css";
import Image from "next/image";
import LoadingImage from "../../../public/images/website icon.png";
import { symlink } from "fs";

export default async function Loading() {

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.loadingBox}>
          <Image src={LoadingImage} alt="Loading icom" className={styles.image} />
          <div className={styles.loader}></div>
        </div>
      </section>
    </main>
  );
}
