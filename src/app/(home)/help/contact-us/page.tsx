"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useState, ChangeEvent } from "react";


export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');
    console.log("Form data:", formData);
    try {
      const response = await fetch('/help/contact-us/api/contact.ts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle success, e.g., show a success message
        setSubmitted(true);
        console.log('Form submitted successfully');
        return response.json();
      } 
      else {
        // Handle error, e.g., show an error message
        const errorData = await response.json();
        setErrorMessage(errorData.message);
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Failed to submit form. Please try again later.');
    }finally{
      setSubmitting(false);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading2}>Get in touch with Cashmatrix</h1>
          <p className={styles.heroDesc}>We love our customers and don{"'"}t like to leave them hanging. Tell us how we can help
            you and we will be sure to get back to you in time.</p>
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
            <form action="" className={styles.form} onSubmit={handleSubmit}>
              {submitted ? (
                <p style={{color:"green"}}>Form Submitted Successfully</p>
              ): (
              <div className={styles.inputBox}>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className={styles.input}
                  onChange={handleChange}
                  value={formData.name}
                  autoComplete="on"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={styles.input}
                  onChange={handleChange}
                  value={formData.email}
                  autoComplete="on"
                  required
                />
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className={styles.input}
                  onChange={handleChange}
                  value={formData.subject}
                  autoComplete="on"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className={styles.textArea}
                  onChange={handleChangeText}
                  value={formData.message}
                  autoComplete="on"
                  autoCorrect="on"
                  required
                  >
                </textarea>
              </div>
              )}
              <div
                className="g-recaptcha"
                data-sitekey="6LfgNuYpAAAAAL_CklptBZG1rVtOpzIvWPL2Yo2G"></div>
              <button type="submit" className={styles.formButton} onClick={() => (handleSubmit)} disabled={submitting}>
               {submitting ? 'Sending...' : 'Send Message'}
              </button>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
