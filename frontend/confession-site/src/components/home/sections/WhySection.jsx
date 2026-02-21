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

        {/* Left Romantic Block */}
        <div className={styles.leftContent}>
          <h2 className={styles.heading}>
            Some feelings are too sacred to survive daylight.
          </h2>

          <p className={styles.mainText}>
            The love you never confessed.  
            The regret that still visits you at night.  
            The guilt you carry in silence.
          </p>

          <p className={styles.subText}>
            This place exists for the words that were never meant
            to be spoken out loud — but were never meant to stay buried either.
          </p>
        </div>

        {/* Right Whisper Column */}
        <div className={styles.rightWhispers}>
          <div className={styles.whisperCard}>
            <span className={styles.tag}>LONGING</span>
            <p className={styles.textColor}>“I still think about her.”</p>
          </div>

          <div className={styles.whisperCard}>
            <span className={styles.tag}>GUILT</span>
            <p className={styles.textColor}>“I lied, and they trust me.”</p>
          </div>

          <div className={styles.whisperCard}>
            <span className={styles.tag}>FORBIDDEN</span>
            <p className={styles.textColor}>“I love someone I shouldn’t.”</p>
          </div>

          <div className={styles.whisperCard}>
            <span className={styles.tag}>REGRET</span>
            <p className={styles.textColor}>“I miss what we never were.”</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhySection;