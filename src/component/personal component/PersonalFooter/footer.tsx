import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/Personal logo.png";
import styles from "./footer.module.css";

export default function PersonalFooter() {
  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.imageBox}>
            <Image src={logo} alt="cashmatrix logo" className={styles.logo} />
            <div className={styles.socials}>
              <span className={styles.social}>
                <Link href="https://www.instagram.com/usecashmatrix/" className={styles.socialLink}><i className="fa-brands fa-square-instagram"></i></Link>
              </span>
              <span className={styles.social}>
                <Link href="https://x.com/CashmatrixA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className={styles.socialLink}><i className="fa-brands fa-square-x-twitter"></i></Link>
              </span>
              <span className={styles.social}>
                <Link href="https://ng.linkedin.com/company/cashmatrixapp" className={styles.socialLink}><i className="fa-brands fa-linkedin"></i></Link>
              </span>
              <span className={styles.social}>
                <Link href="https://www.facebook.com/cashmatrixapp/" className={styles.socialLink}><i className="fa-brands fa-square-facebook"></i></Link>
              </span>
            </div>
          </div>
          <div className={styles.content}>
            <h4 className={styles.Heading}>Personal</h4>
            <ul className={styles.listItems}>
              <Link href="/join-cashmatrix" className={styles.listLink}>
                <li className={styles.listItem}>Cashmatrix App</li>
              </Link>
              <Link href="/personal" className={styles.listLink}>
                <li className={styles.listItem}>Discover Personal</li>
              </Link>
              <Link href="" className={styles.listLink}>
                <li className={styles.listItem}>Transfer</li>
              </Link>
              <Link href="/#matrix save" className={styles.listLink}>
                <li className={styles.listItem}>Matrix Save</li>
              </Link>
            </ul>
          </div>
          <div className={styles.content}>
            <h4 className={styles.Heading}>Business</h4>
            <ul className={styles.listItems}>
              <Link href="/business/discover-business" className={styles.listLink}>
                <li className={styles.listItem}>Discover Business</li>
              </Link>
              <Link href="/business/pos" className={styles.listLink}>
                <li className={styles.listItem}>POS</li>
              </Link>
              <Link href="/business/payout-API" className={styles.listLink}>
                <li className={styles.listItem}>Payout API</li>
              </Link>
            </ul>
          </div>
          <div className={styles.content}>
            <h4 className={styles.Heading}>Company</h4>
            <ul className={styles.listItems}>
              <Link href="/company/blog" className={styles.listLink}>
                <li className={styles.listItem}>Blog</li>
              </Link>
              <Link href="/company/about-us" className={styles.listLink}>
                <li className={styles.listItem}>About Us</li>
              </Link>
              <Link href="/company/join-our-team" className={styles.listLink}>
                <li className={styles.listItem}>Join Our Team</li>
              </Link>
            </ul>
          </div>
          <div className={styles.content}>
            <h4 className={styles.Heading}>Help</h4>
            <ul className={styles.listItems}>
              <Link href="/help/get-help" className={styles.listLink}>
                <li className={styles.listItem}>Get Help</li>
              </Link>
              <Link href="/help/faqs" className={styles.listLink}>
                <li className={styles.listItem}>FAQs</li>
              </Link>
              <Link href="/help/contact-us" className={styles.listLink}>
                <li className={styles.listItem}>Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className={styles.content}>
            <h4 className={styles.Heading}>Legal</h4>
            <ul className={styles.listItems}>
              <Link href="/legal/data-consent" className={styles.listLink}>
                <li className={styles.listItem}>Data Consent Policy</li>
              </Link>
              <Link href="/legal/terms-and-condition" className={styles.listLink}>
                <li className={styles.listItem}>Terms & Condition</li>
              </Link>
            </ul>
          </div>
        </div>
        <hr className={styles.horizontal}/>
        <p className={styles.paragraph}>CashMatrix is the digital product of Asset Matrix Microfinance Bank Limited (RC 836197).</p>
        <p className={styles.paragraph}>AssetMatrix Microfinance Bank Limited is Licensed by Central Bank of Nigeria, and all deposits are insured by Nigeria Deposit Insurance Corporation (NDIC).</p>
        <p className={styles.paragraph}>©2024 Cashmatrix Banking App | All Rights Reserved. </p>
      </section>
    </footer>
  );
}
