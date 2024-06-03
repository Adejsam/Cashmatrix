"use client";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import ServicesCard from "@/component/ServiceCard/page";
import PlayStore from "../../../public/icons/PlayStore";
import AppleStore from "../../../public/icons/AppleStore";
import Cbn from "../../../public/icons/Cbn";
import Ndic from "../../../public/icons/Ndic";
import HeroImage from "../../../public/images/Hero Image.png";
import FeatureImage from "../../../public/images/Feature Image.png";
import airtimeData from "../../../public/icons/airtime-data.png";
import cableTv from "../../../public/icons/cable-tv.png";
import transactHist from "../../../public/icons/transact_history.png";
import electricity from "../../../public/icons/electricity.png";
import savings from "../../../public/icons/savings.png";
import transfer from "../../../public/icons/transfer.png";
import createAccount from "../../../public/images/create account.png";
import saveMatrix from "../../../public/images/saving.png";
import customerService from "../../../public/images/customer service.jpg";
import cbnLogo from "../../../public/icons/CBN logo.png";
import wemaBank from "../../../public/icons/wema bank.png";
import ndicLogo from "../../../public/icons/NDIC Logo.png";
import assetMatrix from "../../../public/icons/Asset Matrix Logo.png";
import sterlingLogo from "../../../public/icons/Sterling Logo.png";
import TestimonialsCard from "@/component/Testimonial Card/page";
import testimonials from "./page.data";
import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import security from "../../../public/images/security.png";

const Home = (): ReactNode => {
  return (
    <main className={styles.main}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.hero}>
          <div className={styles.content}>
            <h1 className={styles.heading}>Digital Banking At Ease</h1>
            <p className={styles.description}>
              Enjoy seamless Banking when you download the cashmatrix app. Enjoy cashless payment
              options and earn interest on your saving with cashmatrix.
            </p>
            <div className={styles.download}>
              <Link
                href="https://play.google.com/store/search?q=cashmatrix+app&c=apps"
                target="_blank">
                <PlayStore />
              </Link>
              <Link href="https://apps.apple.com/us/app/cashmatrix/id6470770885" target="_blank">
                <AppleStore />
              </Link>
            </div>
            <div className={styles.licenses}>
              <span className={styles.cbn}>
                <Cbn />
              </span>
              <span className={styles.ndic}>
                <Ndic />
              </span>
            </div>
          </div>
          <div className={styles.imageBox}>
            <Image src={HeroImage} alt="Hero Image" className={styles.image} />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className={styles.featureSection}>
        <div className={styles.featureBox}>
          <div className={styles.features}>
            <div className={styles.feature}>
              <Image src={transfer} alt="transfer icon" className={styles.featureIcon} />
              <div className={styles.featureInfo}>
                <h3 className={styles.featureHeading}>Free Instant Transfer</h3>
                <p className={styles.featureDesc}>
                  Cashmatrix Allows you to transfer fund to any bank account in Nigeria.
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <Image src={cableTv} alt="Cable Tv icon" className={styles.featureIcon} />
              <div className={styles.featureInfo}>
                <h3 className={styles.featureHeading}>Cable TV Subscription</h3>
                <p className={styles.featureDesc}>
                  You can pay for DSTV, Gotv or StarTimes subscription instantly with Cashmatrix.
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <Image src={airtimeData} alt="airtime and data icon" className={styles.featureIcon} />
              <div className={styles.featureInfo}>
                <h3 className={styles.featureHeading}>Airtime/Data TopUp</h3>
                <p className={styles.featureDesc}>
                  With CashMatrix, customers purchase airtime or data top-up with ease{" "}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.featureImageBox}>
            <Image
              src={FeatureImage}
              alt="Image for the feature Section"
              className={styles.featureImage}
            />
          </div>
          <div className={styles.features}>
            <div className={styles.feature}>
              <Image
                src={transactHist}
                alt="Transaction History Icon"
                className={styles.featureIcon}
              />
              <div className={styles.featureInfo}>
                <h3 className={styles.featureHeading}>Transaction History</h3>
                <p className={styles.featureDesc}>
                  Quick display of transactions history for the day is available on CashMatrix app.
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <Image src={electricity} alt="Electriciity Icon" className={styles.featureIcon} />
              <div className={styles.featureInfo}>
                <h3 className={styles.featureHeading}>Electricity Payment</h3>
                <p className={styles.featureDesc}>
                  With Cashmatrix you can make your electricity bills payments in no time
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <Image src={savings} alt="Savings Icon" className={styles.featureIcon} />
              <div className={styles.featureInfo}>
                <h3 className={styles.featureHeading}>Savings</h3>
                <p className={styles.featureDesc}>
                  Save at your Convinence and withdraw anytime with no penalty on the Cashmatrix app
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERCVICES SECTION */}
      <section className={styles.servicesSection}>
        <h2 className={styles.servicesHeading}>On Cashmatrix</h2>
        <ServicesCard
          title="Open an Account in Minutes"
          content="Account Opening has never been more seamless. With the Cashmatrix app you can open an account in minutes. All you need is your Bank Verification Number (BVN) or National Identification Number (NIN)"
          imagesrc={createAccount}
          link="https://play.google.com/store/apps/details?id=com.assetcashmatrix.mfb"
          linkCont="Open an Account"
          arrow="fa-solid fa-angle-right"
        />
        <ServicesCard
          title="Save for the future with SaveMatrix"
          content="The Cashmatrix app offer the savematrix feature that lets you save money automatically on a weekly, bi-weekly, monthly, quarterly, annually and bi-annually basis. 
          Get 16% annual interest on your savings and withdraw your money anytime with no penalty."
          imagesrc={saveMatrix}
          link="https://play.google.com/store/apps/details?id=com.assetcashmatrix.mfb"
          linkCont="Save with Savematrix"
          arrow="fa-solid fa-angle-right"
        />
        <ServicesCard
          title="Your privacy and security is our top priority"
          content="Cashmatrix is fully licensed as a Mobile Money Operator by CBN, and insured by NDIC. We manage customers' funds in compliance with all application regulations. This means that all our users are protected "
          imagesrc={security}
          link=""
          linkCont=""
          arrow=""
        />
        <ServicesCard
          title="We are always here to help you"
          content="You can chat with us on the app, slide into our DMs, tweet, leave an Instagram, twitter or facebook comment, send an email or call. However you choose to reach out, we are always available to make your user expierience seamless"
          imagesrc={customerService}
          link="/get-help"
          linkCont="Get Help"
          arrow="fa-solid fa-angle-right"
        />
      </section>

      {/* TESTIMONIAL SECTION */}
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
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}>
          <div className={styles.testimonialBox}>
            {testimonials.map((val, i) => (
              <SwiperSlide key={i}>
                <TestimonialsCard key={i} customers={val} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>

      {/* PARTNERS SECTION */}
      <section className={styles.partnersSection}>
        <h2 className={styles.partnersHeading}>Partners</h2>
        <div className={styles.partnersBoxDiv}>
          <div className={styles.partnersBox}>
            <div className={styles.partnersLogoBox1}>
              <Image src={cbnLogo} alt="CBN logo" className={styles.partnersLogo1} />
              <span className={styles.partnersSpan}>CBN</span>
            </div>
            <div className={styles.partnersOtherLogoBox}>
              <Image src={ndicLogo} alt="NDIC Logo" className={styles.partnersOtherLogo} />
            </div>
            <div className={styles.partnersOtherLogoBox}>
              <Image src={wemaBank} alt="wema bank logo" className={styles.partnersOtherLogo} />
            </div>
            <div className={styles.partnersOtherLogoBox}>
              <Image
                src={assetMatrix}
                alt="Asset Matrix logo"
                className={styles.partnersOtherLogoAsset}
              />
            </div>
            <div className={styles.partnersOtherLogoBox}>
              <Image src={sterlingLogo} alt="Sterling Logo" className={styles.partnersOtherLogo} />
            </div>
          </div>
          <div className={styles.partnersBox1}>
            <div className={styles.partnersLogoBox1}>
              <Image src={cbnLogo} alt="CBN logo" className={styles.partnersLogo1} />
              <span className={styles.partnersSpan}>CBN</span>
            </div>
            <div className={styles.partnersOtherLogoBox}>
              <Image src={ndicLogo} alt="NDIC Logo" className={styles.partnersOtherLogo} />
            </div>
            <div className={styles.partnersOtherLogoBox}>
              <Image src={wemaBank} alt="wema bank logo" className={styles.partnersOtherLogo} />
            </div>
            <div className={styles.partnersOtherLogoBox}>
              <Image
                src={assetMatrix}
                alt="Asset Matrix logo"
                className={styles.partnersOtherLogoAsset}
              />
            </div>
            <div className={styles.partnersOtherLogoBox}>
              <Image src={sterlingLogo} alt="Sterling Logo" className={styles.partnersOtherLogo} />
            </div>
          </div>
        </div>
      </section>

      {/* call to action section */}
      <section className={styles.actionSection}>
        <div className={styles.actionBox}>
          <div className={styles.actionContentBox}>
            <h2 className={styles.actionContent}>Start Your Financial Journey with Cashmatrix</h2>
          </div>
          <div className={styles.actionIconBox}>
            <Link
              className={styles.actionLink}
              href="https://play.google.com/store/apps/details?id=com.assetcashmatrix.mfb"
              target="_blank">
              <PlayStore />
            </Link>
            <Link
              className={styles.actionLink}
              href="https://apps.apple.com/us/app/cashmatrix/id6470770885"
              target="_blank">
              <AppleStore />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
