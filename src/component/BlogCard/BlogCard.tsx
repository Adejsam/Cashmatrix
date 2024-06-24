import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { post } from "@/app/(home)/company/blog/page.data";
import { ReactNode } from "react";

const BlogCard = ({ blog }: { blog: post }): ReactNode => {

  return (
    <main className={styles.main}>
      <div className={styles.blogCard}>
        <div className={styles.blogCardImage}>
          <Image
            src={blog.image}
            alt="blog image"
            className={styles.image}
            width={500}
            height={500}
          />
        </div>
        <div className={styles.blogCardInfo}>
          <Link className={styles.link} href={`/company/blog/`+blog.slug}>
            <h3 className={styles.blogCardHeading}>{blog.title}</h3>
          </Link>
          <p className={styles.blogCardIntro}>{blog.content[0].substring(0,100)}...</p>
          <Link href={`/company/blog/`+blog.slug} className={styles.blogCardBLink}><button type="button" className={styles.blogCardButton}>Read More</button></Link>
          <small className={styles.blogCardSmall}>
            <p className={styles.author}>{blog.author}</p>
            <p className={styles.date}>{blog.date}</p>
          </small>
        </div>
      </div>
    </main>
  );
};

export default BlogCard;
