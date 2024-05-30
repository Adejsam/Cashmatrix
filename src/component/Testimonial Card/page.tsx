import styles from "./page.module.css";
import Image, { StaticImageData } from "next/image";
import { testimaonial } from "@/app/page.data";
import { ReactNode } from "react";

const TestimonialsCard = ({ customers }: { customers: testimaonial }): ReactNode => {
  return (
    <div className={styles.testimonialsBox}>
      <ul className={styles.testimaonialListBox}>
        <li className={styles.testimonialList}>
          <p className={styles.content}>{customers.content}</p>
          <div className={styles.testimonialsImage}>
            <div className={styles.imageBox}><Image src={"https://play-lh.googleusercontent.com"+customers.imgSrc} fill={true} alt={customers.name} className={styles.image} /></div>
            <h5 className={styles.testimonialNames}>{customers.name}</h5>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TestimonialsCard;
