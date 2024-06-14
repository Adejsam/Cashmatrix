import styles from "./page.module.css";
import BlogCard from "@/component/BlogCard/BlogCard";
import Cta from "@/component/personal component/PersonalCallToAction/cta";

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
      <Cta />
    </main>
  );
};

export default page;
