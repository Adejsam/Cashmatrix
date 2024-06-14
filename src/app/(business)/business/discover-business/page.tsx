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
import Cta from "@/component/business component/BusinessCallToAction/cta";
import features1 from "./page.data";
import FeatureCard from "@/component/business component/BusinessFeatureCard/page";
import { ReactNode } from "react";
import { motion} from "framer-motion"

const page = ():ReactNode => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <motion.div className={styles.hero} initial={{scale: 0.8}} whileInView={{scale: 1}} transition={{duration: 0.5,delay: 0, ease:"easeOut"}}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeading}>Your Everyday business management solution</h1>
            <p className={styles.heroInfo}>
              Streamline your business: invoice clients, Recieve POS payments, settle bills, execute
              bulk transfers, and reclaim precious time for other pursuits.
            </p>
            <Link href="/business/create-account" className={styles.heroLink}>
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
        </motion.div>
      </section>

      {/* feature section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresBox} >{features1.map((val,i) => {
          return(
            <FeatureCard key={i} feat1={val}/>
          );
        })}
        </div>
      </section>

      {/* testimonial section */}
      <section className={styles.testimonialSection}>
        <motion.h2 className={styles.testimonialHeading} initial={{scale: 0.8}} whileInView={{scale: 1}} transition={{duration: 2,delay: 0, ease:"easeOut"}}>Don{"'"}t just take our word for it</motion.h2>
        <motion.div  initial={{scale: 0.8}} whileInView={{scale: 1}} transition={{duration: 2,delay: 0, ease:"easeOut"}}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={4}
            speed={2000}
            loop={true}
            breakpoints = {{
              1000: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              0:{
                slidesPerView: 1,
                spaceBetween: 10,
              } 
            }}
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
        </motion.div>
      </section>

      {/* call to action */}
      <section className={styles.ctaSection}>
        <motion.div initial={{scale: 0.8}} whileInView={{scale: 1}} transition={{duration: 1.5,delay: 0, ease:"easeOut"}}>
          <Cta />
        </motion.div>
      </section>
    </main>
  );
};

export default page;
