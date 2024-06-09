"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Cbn from "../../../../../public/icons/Cbn";
import Ndic from "../../../../../public/icons/Ndic";
import businessHero from "../../../../../public/images/business hero image.png";
import TestimonialsCard from "@/component/Testimonial Card/page";
import testimonials from "../../../(home)/page.data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Cta from "@/component/BusinessCallToAction/cta";
import features1 from "./page.data";
import FeatureCard from "@/component/BusinessFeatureCard/page";
import { ReactNode } from "react";
import features from "../pos/page.data";

const page = ():ReactNode => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeading}>Your Everyday business management solution</h1>
            <p className={styles.heroInfo}>
              Streamline your business: invoice clients, Recieve POS payments, settle bills, execute
              bulk transfers, and reclaim precious time for other pursuits.
            </p>
            <Link href="" className={styles.heroLink}>
              <button type="button" className={styles.heroButton}>
                Open Cashmatrix Business Account
                <span className={styles.arrowRight}>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </button>
            </Link>
            <div className={styles.licenses}>
              <Ndic />
              <Cbn />
            </div>
          </div>
          <div className={styles.heroImageBox}>
            <Image src={businessHero} alt="hero image" className={styles.heroImage} />
          </div>
        </div>
      </section>

      {/* feature section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresBox}>{features1.map((val,i) => {
          return(
            <FeatureCard key={i} feat1={val}/>
          );
        })}
        </div>
      </section>

      {/* testimonial section */}
      <section className={styles.testimonialSection}>
        <h2 className={styles.testimonialHeading}>Don{"'"}t just take our word for it</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={4}
          speed={2000}
          loop={true}
          freeMode={true}
          className={styles.swiper}
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}>
          <div className={styles.testimonialBox}>
            {testimonials.map((val, i) => (
              <SwiperSlide key={i}>
                <TestimonialsCard key={i} customers={val} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>

      {/* call to action */}
      <section className={styles.ctaSection}>
        <Cta />
      </section>
    </main>
  );
};

export default page;
