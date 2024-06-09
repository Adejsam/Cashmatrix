import styles from "./page.module.css";

const privacyPolicy = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading2}>Privacy Policy</h1>
          <p className={styles.heroDesc}>
            Cashmatrix is fully dedicated to safeguarding and respecting your privacy.
          </p>
        </div>
        <ul className={styles.lists}>
          <li className={styles.list}>
            <h3 className={styles.listHeading}>(1). Nigeria Data Protection Regulation</h3>
            <p className={styles.paragraph}>
              Under the Nigeria Data Protection Regulation 2019(NDPR), there are certain occasions
              when CashMatrix by Asset Matrix Microfinance Bank Limited must obtain your explicit
              consent to use your information, known as Personal Data. Personal Data includes, but
              is not limited to your name, address, telephone number, email address, card details,
              and Bank Verification Number (BVN).
            </p>
            <p className={styles.paragraph}>
              We would like to hold and use your information for the purposes set in the Data
              Processing Notice which requires consent in accordance with the Privacy Policy
            </p>
            <p className={styles.paragraph}>
              As a result of this grant CashMatrix by Asset Matrix Microfinance Bank Limited consent
              to collect my name, official Government ID Number (ID Number), and photo image.
            </p>
          </li>
          <li className={styles.list}>
            <h3 className={styles.listHeading}>(2). Details Collection</h3>
            <p className={styles.paragraph}>
              I understand that CashMatrix by Asset Matrix Microfinance Bank Limited may share this
              information with a third-party service provider to validate it against a government
              source. I also know that the third-party service provider may use my ID Number to
              gather the following additional data on me:
            </p>
            <p className={styles.paragraph}>
              While our clients sit back and relax, we initiate and complete the instant fund
              transfer based on the clients requests. and the beneficiary is paid instantly after
              confirmation of the necessary requirements.
            </p>
            <ul className={styles.subLists}>
              <li className={styles.subList}><span className={styles.span}><i className="fa-solid fa-check"></i></span>Full Name</li>
              <li className={styles.subList}><span className={styles.span}><i className="fa-solid fa-check"></i></span>Date of Birth</li>
              <li className={styles.subList}><span className={styles.span}><i className="fa-solid fa-check"></i></span>NIN Number</li>
              <li className={styles.subList}><span className={styles.span}><i className="fa-solid fa-check"></i></span>Address</li>
              <li className={styles.subList}><span className={styles.span}><i className="fa-solid fa-check"></i></span>Picture</li>
              <li className={styles.subList}><span className={styles.span}><i className="fa-solid fa-check"></i></span>Phone Number</li>
              <li className={styles.subList}><span className={styles.span}><i className="fa-solid fa-check"></i></span>Gender</li>
              <li className={styles.subList}><span className={styles.span}><i className="fa-solid fa-check"></i></span>Bank Verification Number (BVN)</li>
              <li className={styles.subList}><span className={styles.span}><i className="fa-solid fa-check"></i></span>Government ID Expiry Date or other additional information associated with my ID Number that the Issuing Authority may provide.</li>
            </ul>
            <p className={styles.paragraph}>I understand that this data is being used to confirm my identity. I know that this data may be processed or stored outside of the borders of Nigeria and I as a result of this consent to this.</p>
            <p className={styles.paragraph}>I know that if I wish to change my preferences, request that my data be edited or deleted, or withdraw my consent at any time I must contact CashMatrix.</p>          
          </li>
        </ul>
      </section>
    </main>
  );
};

export default privacyPolicy;
