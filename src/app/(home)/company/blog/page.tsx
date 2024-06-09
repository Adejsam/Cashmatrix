import styles from "./page.module.css";
import BlogCard from "@/component/BlogCard/BlogCard";
import Image from "next/image";
import Link from "next/link";
import PlayStore from "../../../../../public/icons/PlayStore";
import AppleStore from "../../../../../public/icons/AppleStore";

const page = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading2}>Cashmatrix Blog</h1>
          <p className={styles.heroDesc}>
            {" "}
            Discover insightful articles, expert tips, and exciting stories that will inspire and
            inform. Whether you’re a seasoned reader or a first-time visitor, we’re thrilled to have
            you here. Let’s dive in!
          </p>
        </div>
      </section>

      {/* blog card display section */}
      <section className={styles.blogSection}>
        <div className={styles.blogsBox}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
      </section>

       {/* call to action */}
       <section className={styles.ctaSection}>
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
      </section>
    </main>
  );
};

export default page;
