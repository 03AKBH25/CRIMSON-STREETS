// src/components/home/HeroSection.jsx

import React from "react";
import { motion } from "framer-motion";
import styles from "./home.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      {/* Dark overlay */}
      <div className={styles.heroOverlay}></div>

      {/* Content */}
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <h1 className={styles.heroTitle}>CRIMSON SECRETS</h1>

        <p className={styles.heroSubtitle}>
          Within every heart lies a silent kingdom of unspoken truths.
        </p>

        <button className={styles.heroButton}>
          Enter the Silence
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;