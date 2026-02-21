import React, { useEffect, useState } from "react";
import styles from "./WhySection.module.css";

const WhySection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className={styles.whyWrapper}>
      <div className={`${styles.container} ${visible ? styles.show : ""}`}>
        
        <h2 className={styles.heading}>
          Some truths don’t survive daylight.
        </h2>

        <p className={styles.subText}>
          This place exists for the words you never said,
          the emotions you buried,
          and the weight you carry in silence.
        </p>

        <div className={styles.cardContainer}>
          
          <div className={styles.card}>
            <h3>Unspoken Love</h3>
            <p>
              Feelings you never confessed.
              The message you typed but never sent.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Silent Regret</h3>
            <p>
              Mistakes that echo in your mind.
              Apologies you never delivered.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Hidden Guilt</h3>
            <p>
              Secrets too heavy for friends.
              Truths that need a safe resting place.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhySection;