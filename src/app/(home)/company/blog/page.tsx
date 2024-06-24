"use client";

import styles from "./page.module.css";
import BlogCard from "@/component/BlogCard/BlogCard";
import Cta from "@/component/personal component/PersonalCallToAction/cta";
import { ReactNode } from "react";
import posts from "./page.data";

const page = (): ReactNode => {
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
          {posts.map((val, i) => {
            return <BlogCard key={i} blog={val} />;
          })}
        </div>
      </section>

      {/* call to action */}
      <Cta />
    </main>
  );
};

export default page;
