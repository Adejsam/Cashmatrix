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
import ServicesCard from "@/component/ServiceCard/page";
import PlayStore from "../../../../../public/icons/PlayStore";
import AppleStore from "../../../../../public/icons/AppleStore";

const page = () => {
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
        <div className={styles.featuresBox}>
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureHeading}>
                Open a Cashmatrix Business account with no paperwork
              </h2>
              <p className={styles.featureInfo}>
                {" "}
                Setup an account anytime and anywhere. All you need in your:
              </p>
              <ul className={styles.featureLists}>
                <li className={styles.featureList}>
                  <span className={styles.check}>
                    <i className="fa-solid fa-check"></i>
                  </span>{" "}
                  CAC (Customer acquisition cost)
                </li>
                <li className={styles.featureList}>
                  <span className={styles.check}>
                    <i className="fa-solid fa-check"></i>
                  </span>{" "}
                  CAC (Customer acquisition cost)
                </li>
                <li className={styles.featureList}>
                  <span className={styles.check}>
                    <i className="fa-solid fa-check"></i>
                  </span>{" "}
                  CAC (Customer acquisition cost)
                </li>
              </ul>
              <div className={styles.buttonBox}>
                <Link href="" className={styles.featureLink}>
                  <button type="button" className={styles.featureButton}>
                    Open Cashmatrix Business Account
                    <span className={styles.arrowRight}>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className={styles.featureImageBox}>
              <Image src="" alt="" className={styles.featureImage} />
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureHeading}>
                Manage all your business expenses conveniently in a single place.
              </h2>
              <p className={styles.featureInfo}>
                Effortlessly handle bill payments and airtime purchases without switching platforms,
                ensuring seamless organization and smooth business operations.
              </p>
              <div className={styles.buttonBox}>
                <Link href="" className={styles.featureLink}>
                  <button type="button" className={styles.featureButton}>
                    Explore Bill Payment
                    <span className={styles.arrowRight}>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className={styles.featureImageBox}>
              <Image src="" alt="" className={styles.featureImage} />
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureHeading}>Boost your earnings with the Cashmatrix POS</h2>
              <p className={styles.featureInfo}>
                Effortlessly accept card and transfers payment using a dependable point-of-sale
                terminal. Experience instant settlements, instant dispute resolution, and immediate
                payments every time.
              </p>
              <div className={styles.buttonBox}>
                <Link href="" className={styles.featureLink}>
                  <button type="button" className={styles.featureButton}>
                    Request for POS
                    <span className={styles.arrowRight}>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </button>
                </Link>
                <Link href="/business/pos" className={styles.featureLink2}>
                  <button type="button" className={styles.featureButton2}>
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className={styles.featureImageBox}>
              <Image src="" alt="" className={styles.featureImage} />
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureHeading}>We are always here to help you.</h2>
              <p className={styles.featureInfo}>
                You can always count on our team of professional to assit you in ensuring smooth
                operation 24/7. Unlock valuable business insights and additional features with
                Cashmatrix business account.
              </p>
              <div className={styles.buttonBox}>
                <Link href="/help/get-help" className={styles.featureLink}>
                  <button type="button" className={styles.featureButton}>
                    Get Help
                    <span className={styles.arrowRight}>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className={styles.featureImageBox}>
              <Image src="" alt="" className={styles.featureImage} />
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureHeading}>Protect your business form fraud</h2>
              <p className={styles.featureInfo}>
                We protect your business againt fraud through User Authentication and Verification,
                Transaction Monitoring, Secure Payment Processing and Fraud Detection Algorithms.
                Benefit from round-the-clock anti-fraud vigilance, ensuring your operations stay
                secure at all times
              </p>
            </div>
            <div className={styles.featureImageBox}>
              <Image src="" alt="" className={styles.featureImage} />
            </div>
          </div>
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
