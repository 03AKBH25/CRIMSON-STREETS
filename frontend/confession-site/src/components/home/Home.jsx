// src/components/home/Home.jsx

import React from "react";
import styles from "./home.module.css";

import HeroSection from "./HeroSection";
import StatsChamber from "./StatsChamber";
import MoodSigils from "./MoodSigils";
import SummonRitual from "./SummonRitual";
import PromptOfTheNight from "./PromptOfTheNight";
import WhisperWall from "./WhisperWall";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <HeroSection />

      <section className={styles.sectionSpacing}>
        <StatsChamber />
      </section>

      <section className={styles.sectionSpacing}>
        <MoodSigils />
      </section>

      <section className={styles.sectionSpacing}>
        <SummonRitual />
      </section>

      <section className={styles.sectionSpacing}>
        <PromptOfTheNight />
      </section>

      <WhisperWall />
    </div>
  );
};

export default Home;