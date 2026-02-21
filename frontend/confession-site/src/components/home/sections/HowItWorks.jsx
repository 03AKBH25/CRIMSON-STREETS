import React, { useEffect, useState } from "react";
import styles from "./HowItWorks.module.css";
import howVideo from "../../../assets/3rdSection.mp4";

const HowItWorks = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className={styles.howWrapper}>

      {/* Background Video */}
      <video
        className={styles.backgroundVideo}
        src={howVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for readability */}
      <div className={styles.overlay}></div>

      <div className={`${styles.container} ${visible ? styles.show : ""}`}>
        
        <h2 className={styles.heading}>How It Works</h2>

        <div className={styles.timeline}>

          <div className={styles.step}>
            <div className={styles.circle}>01</div>
            <h3>Choose the Bond</h3>
            <p>Select who your confession is about.</p>
          </div>

          <div className={styles.step}>
            <div className={styles.circle}>02</div>
            <h3>Speak Without Fear</h3>
            <p>Just your truth.</p>
          </div>

          <div className={styles.step}>
            <div className={styles.circle}>03</div>
            <h3>Let It Rest</h3>
            <p>Your words become part of the silent archive.</p>
          </div>

        </div>

      </div>

      {/* Top & Bottom Fade for smooth blending */}
      <div className={styles.topFade}></div>
      <div className={styles.bottomFade}></div>

    </section>
  );
};

export default HowItWorks;