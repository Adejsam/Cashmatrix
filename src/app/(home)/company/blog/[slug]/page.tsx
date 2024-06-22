"use client";

import styles from "./page.module.css";
import Image from "next/image";
import BlogCard from "@/component/BlogCard/BlogCard";
import posts, { post } from "../page.data";
import { ReactNode, useEffect, useState } from "react";
import {usePathname } from "next/navigation";

const Page = (): ReactNode => {
  const path = usePathname();
  const pathLength = path.split("/");
  const blogSlug = pathLength[pathLength.length - 1];
  console.log(blogSlug);

  const firstItems = posts.slice(0, 3);

  const [blog, setBlog] = useState<post | null>(null);

  useEffect(() => {
    const foundBlog = posts.find((blog) => blog.slug === blogSlug);
    if (foundBlog) {
      setBlog(foundBlog);
    } else {
      // Handle blog not found
      setBlog(null);
    }
  }, [blogSlug]);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <main className={styles.main}>
      {posts.map((val, i) => {
        return (
          <section className={styles.section} key={i}>
            <div className={styles.postBox}>
              <div className={styles.postContent}>
                <h1 className={styles.postHeading}>{val.title}</h1>
                <small className={styles.postSmall}>
                  <p className={styles.postAuthor}>{val.author}</p>
                  <p className={styles.postDate}>{val.date}</p>
                </small>
                <Image
                  src={val.image}
                  alt="Blog Image"
                  className={styles.postImage}
                  width={500}
                  height={500}
                />

                {/* renders the content array*/}
                {val.content.length != 0 &&
                  val.content.map((val1, index1) => {
                    return (
                      <p key={index1} className={styles.content}>
                        {val1}
                      </p>
                    );
                  })}

                {/* list section */}
                {val.listHeading && <h3 className={styles.listHeading}>{val.listHeading}</h3>}
                {val.listDesc && <p className={styles.listDesc}>{val.listDesc}</p>}
                {/* render the list items array*/}
                <ul className={styles.listItems}>
                  {val.listItem.length != 0 &&
                    val.listItem.map((val2, index2) => {
                      return (
                        <li className={styles.listItem} key={index2}>
                          {val2}
                          {val.listContent.length != 0 &&
                            val.listContent.map((val2i, index2i) => {
                              return (
                                <p className={styles.listContent} key={index2i}>
                                  {val2i}
                                </p>
                              );
                            })}
                        </li>
                      );
                    })}
                </ul>

                {val.listHeading2 && <h3 className={styles.listHeading}>{val.listHeading2}</h3>}
                {val.listDesc2 && <p className={styles.listDesc}>{val.listDesc2}</p>}
                {/* render the list items array*/}
                <ul className={styles.listItems}>
                  {val.listItem2.length != 0 &&
                    val.listItem2.map((val3, index3) => {
                      return (
                        <li className={styles.listItem} key={index3}>
                          {val3}
                        </li>
                      );
                    })}
                </ul>

                {/* render the content2 item array */}
                {val.content2.length != 0 &&
                  val.content2.map((val4, index4) => {
                    return (
                      <p key={index4} className={styles.content}>
                        {val4}
                      </p>
                    );
                  })}

                <p className={styles.share}>Share</p>
                <div className={styles.socials}>
                  <span className={styles.icon}>
                    <i className="fa-brands fa-facebook"></i>
                  </span>
                  <span className={styles.icon}>
                    <i className="fa-brands fa-x-twitter"></i>
                  </span>
                  <span className={styles.icon}>
                    <i className="fa-brands fa-instagram"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.latestPost}>
              <h2 className={styles.latestHeading}>Latest Blog</h2>
              <div className={styles.latestBox}>
                {firstItems.map((val, i) => {
                  return <BlogCard key={i} blog={val} />;
                })}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default Page;
