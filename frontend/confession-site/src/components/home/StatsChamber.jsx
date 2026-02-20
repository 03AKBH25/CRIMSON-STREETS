// src/components/home/StatsChamber.jsx

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./home.module.css";
import { generateTodayStats, pastDaysStats } from "./homeData";

const StatsChamber = () => {
  const [stats, setStats] = useState(generateTodayStats());
  const [activeIndex, setActiveIndex] = useState(0);

  // Carousel auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    `🕯 ${stats.confessionsToday} Confessions Written Tonight`,
    `🩸 Dominant Emotion: ${stats.dominantEmotion}`,
    `🏰 Most Whispered About: ${stats.mostCategory}`,
    `👁 ${stats.activeUsers} Souls Confessing Right Now`
  ];

  return (
    <div className={styles.statsChamber}>
      <h2 className={styles.statsTitle}>The Royal Archive</h2>

      {/* Main Carousel */}
      <div className={styles.carouselContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className={styles.carouselSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            {slides[activeIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Past Days Cards */}
      <div className={styles.pastDaysContainer}>
        {pastDaysStats.map((day, index) => (
          <motion.div
            key={index}
            className={styles.pastDayCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h4>{day.day}</h4>
            <p>{day.count} Confessions</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsChamber;