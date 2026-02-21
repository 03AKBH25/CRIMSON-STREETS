import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import heroVideo from "../../../assets/heroSection.mp4";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className={styles.heroWrapper}>
      
      {/* Background Video */}
      <video
        className={styles.backgroundVideo}
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className={styles.overlay}></div>

      {/* Floating Content */}
      <div className={`${styles.heroContent} ${loaded ? styles.show : ""}`}>
        <h1 className={styles.heroTitle}>
          THE CONFESSION ARCHIVE
        </h1>

        <p className={styles.heroSubtitle}>
          Some truths don’t belong to daylight.
          <br />
          Leave yours here.
        </p>

        <button className={styles.heroButton}>
          ENTER THE CHAMBER
        </button>
      </div>

      <div className={styles.bottomFade}></div>
    </section>
  );
};

export default HeroSection;