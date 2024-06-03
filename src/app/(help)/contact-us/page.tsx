"use client";

import Link from "next/link";
import styles from "./page.module.css";
// import { ReCAPTCHA } from "next-recaptcha";
// import { useState, ChangeEvent } from "react";

export default function Page() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form data:", formData);
//   };

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.intro}>
          <h1 className={styles.heading}>Get in touch with cashmatrix</h1>
          <p className={styles.description}>
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
                  <Link className={styles.otherContactLink} href="tel:+234(0)81 7947 0991 ">
                    +234(0)81 7947 0991
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
            <form action="" className={styles.form}>
              <div className={styles.inputBox}>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className={styles.input}
                  // onChange={handleChange}
                  // value={formData.name}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={styles.input}
                  // onChange={handleChange}
                  // value={formData.email}
                />
                <input
                  name="phone number"
                  type="tel"
                  placeholder="Phone"
                  className={styles.input}
                  // onChange={handleChange}
                  // value={formData.phone}
                />
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className={styles.input}
                  // onChange={handleChange}
                  // value={formData.subject}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className={styles.textArea}
                  // onChange={handleChangeText}
                  // value={formData.message}
                  >
                </textarea>
              </div>
              <div
                className="g-recaptcha"
                data-sitekey="6LfgNuYpAAAAAL_CklptBZG1rVtOpzIvWPL2Yo2G"></div>
              {/* <ReCAPTCHA
                data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onVerify={function (token: string): void | Promise<void> {
                  throw new Error("Function not implemented.");
                }}
              /> */}
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
