"use client";

import Link from "next/link";
import styles from "./page.module.css";
// import { useForm, ValidationError } from "@formspree/react";

export default function Page() {
  // const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM!);

  // if (state.succeeded) {
  //   return (
  //     <div className={styles.success}>
  //       <div className={styles.box}>
  //         <p className={styles.emoji}>&#128512;</p>
  //         <p className={styles.message}>
  //           Thanks for your submission. We will make sure we get back to you
  //         </p>
  //         <Link href="/">
  //           <button type="button" className={styles.button}>
  //             Back Home
  //           </button>
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }
  // if (state.errors) {
  //   return (
  //     <div className={styles.errors}>
  //       <div className={styles.box}>
  //         <p className={styles.emoji}>&#9888;</p>
  //         <p className={styles.message}>Oops! There was an error, please try again</p>
  //         <Link href="" >
  //           <button type="button" className={styles.button} onClick={() => {location.reload()}}>
  //             Refresh page to try again
  //           </button>
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading2}>Get in touch with Cashmatrix</h1>
          <p className={styles.heroDesc}>
            We love our customers and don{"'"}t like to leave them hanging. Tell us how we can help
            you and we will be sure to get back to you in time.
          </p>
        </div>
        <div className={styles.contactSection}>
          <div className={styles.otherContactBox}>
            <div className={styles.otherContact}>
              <span className={styles.icon}>
                <i className="fa-solid fa-phone"></i>
              </span>
              <div className={styles.otherContactInfo}>
                <span className={styles.otherContactHeading}>Call or Chat</span>
                <span className={styles.otherContactDay}>Monday - Friday</span>
                <span className={styles.otherContactTime}>9:00am - 5:00pm</span>
                <span className={styles.otherContactContact}>
                  <Link className={styles.otherContactLink} href="tel:+2347046488013">
                  +234 704 648 8013
                  </Link>
                </span>
              </div>
            </div>
            <div className={styles.otherContact}>
              <span className={styles.icon}>
                <i className="fa-solid fa-envelope-open"></i>
              </span>
              <div className={styles.otherContactInfo}>
                <span className={styles.otherContactHeading}>Email</span>
                <span className={styles.otherContactDay}>Send us a mail anytime.</span>
                <span className={styles.otherContactTime}>
                  Our support team will get back to you.
                </span>
                <span className={styles.otherContactContact}>
                  <Link className={styles.otherContactLink} href="mailto:hello@cashmatrix.ng">
                    hello@cashmatrix.ng
                  </Link>{" "}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.contactForm}>
            <h2 className={styles.formHeading}>Contact Us</h2>
            <hr className={styles.horizontal} />
            <p className={styles.formDescription}>
              Kindly fill the form below and we will respond as soon as possible. For more
              information, You can also contact us on other platforms.
            </p>
            <form className={styles.form}>
              <div className={styles.inputBox}>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className={styles.input}
                  autoComplete="on"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={styles.input}
                  autoComplete="on"
                  required
                />
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className={styles.input}
                  autoComplete="on"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className={styles.textArea}
                  autoComplete="on"
                  autoCorrect="on"
                  required></textarea>
                  
              </div>
              <button type="submit" className={styles.formButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
