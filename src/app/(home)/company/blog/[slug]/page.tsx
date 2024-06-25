"use client";

import styles from "./page.module.css";
import Image from "next/image";
import BlogCard from "@/component/BlogCard/BlogCard";
import posts, { post } from "../page.data";
import { ReactNode, useEffect, useState } from "react";
import {usePathname } from "next/navigation";
import Link from "next/link";

const Page = (): ReactNode => {
  const path = usePathname();
  const pathLength = path.split("/");
  const blogSlug = pathLength[pathLength.length - 1];

  const firstItems = posts.slice(0, 3);

  const [blog, setBlog] = useState<post | null>(null);

  //checks if the blog slug is the same as the path 
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

  // handle share function blogs
  const shareOnFacebook = () => {
    const url = encodeURIComponent(`https://cashmatrix.ng/company/blog/${blogSlug}`);
    window.open(`https://www.facebook.com/sharer.php?u=${url}`, '_blank');
  };
  const shareOnTwitter = () => {
    const url = encodeURIComponent(`https://cashmatrix.ng/company/blog/${blogSlug}`);
    const text = encodeURIComponent(`${blog.title} - Read more at: https://cashmatrix.ng/company/blog/${blogSlug}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };
  const shareOnLinkedIn = () => {
    const url = encodeURIComponent('https://cashmatrix.ng/company/blog/${blogSlug}');
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(shareUrl, '_blank');
  };
  const facebooklink = `https://cashmatrix.ng/company/blog/${blogSlug}`
  const twitterLink = `https://cashmatrix.ng/company/blog/${blogSlug}`
  const linkedinLink = `https://cashmatrix.ng/company/blog/${blogSlug}`


  return (
    <main className={styles.main}>
          <section className={styles.section}>
            <div className={styles.postBox}>
              <div className={styles.postContent}>
                <h1 className={styles.postHeading}>{blog.title}</h1>
                <small className={styles.postSmall}>
                  <p className={styles.postAuthor}>{blog.author}</p>
                  <p className={styles.postDate}>{blog.date}</p>
                </small>
                <Image
                  src={blog.image}
                  alt="Blog Image"
                  className={styles.postImage}
                  width={500}
                  height={500}
                />

                {/* renders the content array*/}
                {blog.content.length != 0 &&
                  blog.content.map((val1, index1) => {
                    return (
                      <p key={index1} className={styles.content}>
                        {val1}
                      </p>
                    );
                  })}

                {/* list section */}
                {blog.listHeading && <h3 className={styles.listHeading}>{blog.listHeading}</h3>}
                {blog.listDesc && <p className={styles.listDesc}>{blog.listDesc}</p>}
                {/* render the list items array*/}
                <ul className={styles.listItems}>
                  {blog.listItem.length != 0 &&
                    blog.listItem.map((val2, index2) => {
                      return (
                        <li className={styles.listItem} key={index2}>
                          {val2}
                        </li>
                      );
                    })}
                </ul>

                {/* list Information */}
                <ul className={styles.listItems}>
                    {blog.listsInfo.length != 0 &&
                    blog.listsInfo.map((val5, index5) => {
                      return(
                        <li key={index5} className={index5 % 2 === 0 ? styles.even : styles.odd}>
                          {val5}
                        </li>
                      );
                    })
                    }
                </ul>

                {blog.listHeading2 && <h3 className={styles.listHeading}>{blog.listHeading2}</h3>}
                {blog.listDesc2 && <p className={styles.listDesc}>{blog.listDesc2}</p>}
                {/* render the list items array*/}
                <ul className={styles.listItems}>
                  {blog.listItem2.length != 0 &&
                    blog.listItem2.map((val3, index3) => {
                      return (
                        <li className={styles.listItem} key={index3}>
                          {val3}
                        </li>
                      );
                    })}
                </ul>

                {/* render the content2 item array */}
                {blog.content2.length != 0 &&
                  blog.content2.map((val4, index4) => {
                    return (
                      <p key={index4} className={styles.content}>
                        {val4}
                      </p>
                    );
                  })}

                <p className={styles.share}>Share</p>
                <div className={styles.socials}>
                  <Link href= {`https://www.facebook.com/sharer.php?u=`+facebooklink}>
                    <span className={styles.icon} >
                      <i className="fa-brands fa-square-facebook" onClick={shareOnFacebook}></i>
                    </span>
                  </Link>
                   
                  <Link href={`https://twitter.com/intent/tweet?url=`+twitterLink+`&text=`+blog.title}>
                    <span className={styles.icon}>
                      <i className="fa-brands fa-square-x-twitter" onClick={shareOnTwitter}></i>
                    </span>
                  </Link>
                  
                  <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=`+linkedinLink}>
                    <span className={styles.icon}>
                      <i className="fa-brands fa-linkedin" onClick={shareOnLinkedIn}></i>
                    </span>
                  </Link>
                  
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
    </main>
  );
};

export default Page;
