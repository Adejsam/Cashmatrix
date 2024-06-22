"use client";

import styles from "./page.module.css";
import { faqs, posFaqs, businessFaqs } from "./page.date";
import React, { useState } from "react";

const Page: React.FC = () => {
  const [isOpen, setIsOpen] = useState<string>("Box 1");//to display and not display Question boxes
  const [openSummaryId, setOpenSummaryId] = useState<string | null>(null); // to close and open sumaary

  const toggleSummary = (id: string) => {
    if (openSummaryId === id) {
      setOpenSummaryId(null); 
    } else {
      setOpenSummaryId(id); 
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading2}>Frequently Asked Questions</h1>
          <p className={styles.heroDesc}>
            The FAQ section provides answers to common queries about Cashmatrix. Whether you’re a
            new user or a seasoned customer, if you don{"'"}t find an answer to your question,
            contact the customer care.
          </p>
          <div className={styles.search}>
            {/* <input type="text" name="search" placeholder="Type Keywords to find answers" className={styles.searchField}/> */}
            {/* <button className={styles.icon} name="submit button" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button> */}
          </div>
        </div>
        <div className={styles.faqsButton}>
          <button type="button" className={styles.faqButton} onClick={() => setIsOpen("Box 1")}>
            Personal<i className="fa-solid fa-angle-down"></i>
          </button>
          <button type="button" className={styles.faqButton} onClick={() => setIsOpen("Box 2")}>
            Business<i className="fa-solid fa-angle-down"></i>
          </button>
          <button type="button" className={styles.faqButton} onClick={() => setIsOpen("Box 3")}>
            POS<i className="fa-solid fa-angle-down"></i>
          </button>
        </div>

        {/* Personal question box */}
        {isOpen === "Box 1" && (
          <div className={styles.questionsBox}>
            <h2 className={styles.heading}>Cashmatrix Personal Questions</h2>
            {faqs.map((val, i) => (
              <details key={i} className={styles.details}>
                <summary className={styles.summary} onClick={() => toggleSummary(val.id)}>
                  {val.heading}
                </summary>
                {openSummaryId === val.id && (
                  <div className={styles.contentBox}>
                    <p className={styles.content}>{val.content}</p>
                    {val.content1 && <p className={styles.content}>{val.content1}</p>}
                    {val.content2 && <p className={styles.content}>{val.content2}</p>}
                  </div>
                )}
              </details>
            ))}
          </div>
        )}

        {/* POS Question box */}
        {isOpen === "Box 3" && (
          <div className={styles.posQuestionsBox}>
            <h2 className={styles.heading}>Cashmatrix POS Questions</h2>
            {posFaqs.map((val1, i) => (
              <details key={i} className={styles.details}>
                <summary className={styles.summary} onClick={() => toggleSummary(val1.id)}>
                  {val1.heading}
                </summary>
                {openSummaryId === val1.id && (
                  <div className={styles.contentBox}>
                    <p className={styles.content}>{val1.content}</p>
                    {val1.content1 && <p className={styles.content}>{val1.content1}</p>}
                    {val1.content2 && <p className={styles.content}>{val1.content2}</p>}
                  </div>
                )}
              </details>
            ))}
          </div>
        )}

        {/* Business Question box */}
        {isOpen === "Box 2" && (
          <div className={styles.businessQuestionsBox}>
            <h2 className={styles.heading}>Cashmatrix Business Questions</h2>
            {businessFaqs.map((val2, i) => (
              <details key={i} className={styles.details}>
                <summary className={styles.summary} onClick={() => toggleSummary(val2.id)}>
                  {val2.heading}
                </summary>
                {openSummaryId === val2.id && (
                  <div className={styles.contentBox}>
                    <p className={styles.content}>{val2.content}</p>
                    {val2.content1 && <p className={styles.content}>{val2.content1}</p>}
                    {val2.content2 && <p className={styles.content}>{val2.content2}</p>}
                  </div>
                )}
              </details>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Page;
