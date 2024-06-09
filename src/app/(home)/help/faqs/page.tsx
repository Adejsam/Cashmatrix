import styles from "./page.module.css";
import faqs  from "./page.date";

const page = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading2}>Frequently Asked Questions</h1>
          <p className={styles.heroDesc}>The FAQ section provides answers to common queries about Cashmatrix. 
          Whether you’re a new user or a seasoned customer, if you don{"'"}t find an answer to your question, contact the customer care.</p>
          <div className={styles.search}>
            <input type="text" name="search" placeholder="Type Keywords to find answers" className={styles.searchField}/>
            <button className={styles.icon} name="submit button" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
        <div className={styles.questionsBox}>{faqs.map((val, i) => (
            <details key={i} className={styles.details}>
                <summary className={styles.summary}>{val.heading}</summary> 
                <div className={styles.contentBox}>
                    <p className={styles.content}>{val.content}</p>
                    <br />
                    <p className={styles.content}>{val.content1}</p>
                    <br />
                    <p className={styles.content}>{val.content2}</p>
                </div>
            </details>
        ))}
        </div>
      </section>
    </main>
  );
};

export default page;
