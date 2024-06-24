"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import teamImage from "../../../../../public/images/join our team.png";
import trust from "../../../../../public/images/trust.png";
import quality from "../../../../../public/images/quality.png";
import resilience from "../../../../../public/images/resilience.png";
import customersFirst from "../../../../../public/images/customer first.png";
import diligence from "../../../../../public/images/Diligence.png";
import resolution from "../../../../../public/images/maturity.png";
import paid from "../../../../../public/icons/paid.png";
import more from "../../../../../public/icons/more.png";
import development from "../../../../../public/icons/development.png";
import health from "../../../../../public/icons/health.png";
const page = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeading}>Join Our Team...</h1>
            <p className={styles.heroInfo}>Digital Banking @ Ease</p>
            <Link href="/company/join-our-team/all-openings" className={styles.heroLink}>
              <button type="button" className={styles.heroButton}>
                View All Openings
              </button>
            </Link>
          </div>
          <div className={styles.heroImageBox}>
            <Image src={teamImage} alt="hero Image" className={styles.heroImage} />
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className={styles.valuesSection}>
        <h2 className={styles.valuesHeading}>Our Values</h2>
        <p className={styles.valuesInfo}>Our commitment to our values and fostering an exceptional work culture drives us forward</p>
        <div className={styles.valuesBox}>
          <div className={styles.value} id={styles.value1}>
            <h3 className={styles.valueHeading}>Trust</h3>
            <p className={styles.valueContent}>we are commited to delivering on promise and doing what is right for our customers</p>
            <Image src={trust} alt="value image" className={styles.valueImage}/>
          </div>
          <div className={styles.value} id={styles.value2}>
            <h3 className={styles.valueHeading}>High Quality</h3>
            <p className={styles.valueContent}>We make sure that we consistently deliver execptional service to our customers</p>
            <Image src={quality} alt="value image" className={styles.valueImage}/>
          </div>
          <div className={styles.value} id={styles.value3}>
            <h3 className={styles.valueHeading}>Resilience</h3>
            <p className={styles.valueContent}>We push through difficulties and recover quickly from losses for the good of the Cashmatrix community</p>
            <Image src={resilience} alt="value image" className={styles.valueImage}/>
          </div>
          <div className={styles.value} id={styles.value4}>
            <h3 className={styles.valueHeading}>Diligence</h3>
            <p className={styles.valueContent}>We put effort into our work and we are persistent, focused and committed to achieving goals.</p>
            <Image src={diligence} alt="value image" className={styles.valueImage}/>
          </div>
          <div className={styles.value} id={styles.value5}>
            <h3 className={styles.valueHeading}>Resolution</h3>
            <p className={styles.valueContent}>We push towards achieving growth daily by finding solutions to problem and challenges</p>
            <Image src={resolution} alt="value image" className={styles.valueImage}/>
          </div>
          <div className={styles.value} id={styles.value6}>
            <h3 className={styles.valueHeading}>Customer First</h3>
            <p className={styles.valueContent}>Our top priority is resolving customer issues. We consider nothing successful until we’ve addressed their concerns.</p>
            <Image src={customersFirst} alt="value image" className={styles.valueImage}/>
          </div>
        </div>
      </section>

      {/* benefit section */}
      <section className={styles.benfitsSection}>
        <h2 className={styles.benefitsHeading}>Benefits and Perks</h2>
        <p className={styles.benefitsInfo}>
          At Cashmatrix, there is never a dull moment. In addition to a competitive salary, we
          provide benefits and support to empower our team’s success.
        </p>
        <div className={styles.benefitsBox}>
          <div className={styles.benefit}>
            <div className={styles.iconBox}>
              <Image src={paid} alt="paid icon" className={styles.icon} id={styles.icon1}/>
            </div>
            <div className={styles.benefitInfo}>
              <h4 className={styles.benefitHeading}>Paid Annual Leave</h4>
              <p className={styles.benefitContent}>You’ll receive paid time off from work.</p>
            </div>
          </div>
          <div className={styles.benefit}>
            <div className={styles.iconBox}>
              <Image src={health} alt="paid icon" className={styles.icon} id={styles.icon2}/>
            </div>
            <div className={styles.benefitInfo}>
              <h4 className={styles.benefitHeading}>Health</h4>
              <p className={styles.benefitContent}>You’ll recieve a health insurance coverage.</p>
            </div> 
          </div>
          <div className={styles.benefit}>
            <div className={styles.iconBox}>
              <Image src={development} alt="paid icon" className={styles.icon} id={styles.icon3}/>
            </div>
            <div className={styles.benefitInfo}>
              <h4 className={styles.benefitHeading}>Professional Development</h4>
              <p className={styles.benefitContent}>We Provide employees with opportunities to grow and develop their skills.</p>
            </div>
          </div>
          <div className={styles.benefit}>
            <div className={styles.iconBox}>
              <Image src={more} alt="paid icon" className={styles.icon} id={styles.icon4}/>
            </div>
            <div className={styles.benefitInfo}>
              <h4 className={styles.benefitHeading}>More</h4>
              <p className={styles.benefitContent}>More benefit offered upon joining Cashmatrix</p>
            </div>
            
          </div>
          {/* <div className={styles.benefit}>
            <h4 className={styles.benefitHeading}></h4>
            <p className={styles.benefitContent}></p>
          </div>
          <div className={styles.benefit}>
            <h4 className={styles.benefitHeading}></h4>
            <p className={styles.benefitContent}></p>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default page;
