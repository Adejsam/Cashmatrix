import Link from "next/link";
import styles from "./page.module.css";
import Image, { StaticImageData } from "next/image";

type ServiceCardProps = {
  title: string;
  content: string;
  imagesrc: StaticImageData;
  link: string;
  linkCont: string;
  arrow: string;
};

const ServicesCard: React.FC<ServiceCardProps> = ({
  title,
  content,
  imagesrc,
  link,
  linkCont,
  arrow,
}) => {
  return (
    <div className={styles.serviceBox}>
      <div className={styles.serviceImage}>
        <Image src={imagesrc} alt={title} className={styles.image} />
      </div>
      <div className={styles.serviceInfo}>
        <h3 className={styles.heading}>{title}</h3>
        <p className={styles.content}>{content}</p>
        <Link href={link} className={styles.link}>
          <span className={styles.linkCont}>{linkCont}</span>
          <span className={styles.arrow}>
            <i className={arrow}></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
