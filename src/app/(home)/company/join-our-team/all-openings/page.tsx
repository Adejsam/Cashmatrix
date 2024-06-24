"use client";

import styles from "./page.module.css";
const page = () => {
  return (
    <main className={styles.main}>
        <section className={styles.section}>
            <h1 className={styles.heading}>Job Openings at Cashmatrix</h1>
            <p className={styles.desc}>Here are some available job openings</p>
            <div className={styles.buttonBox}>
                <button type="button" className={styles.button}><i className="fa-solid fa-briefcase"></i>Job Title</button>
                <button type="button" className={styles.button}><i className="fa-solid fa-location-dot"></i>Location</button>
                <button type="button" className={styles.button}>Type</button>
            </div>
            <div className={styles.jobBox}>
                <p className={styles.jobInfo}>No Jobs Available Yet</p>
            </div>
        </section>
    </main>
  )
}

export default page;