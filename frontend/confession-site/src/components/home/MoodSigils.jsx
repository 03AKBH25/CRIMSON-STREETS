// src/components/home/MoodSigils.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./home.module.css";
import { moods } from "./homeData";

const MoodSigils = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleSelect = (mood) => {
    setSelectedMood(mood === selectedMood ? null : mood);
  };

  return (
    <div className={styles.sigilSection}>
      <h2 className={styles.sigilTitle}>Seal the Chamber With a Mood</h2>

      <div className={styles.sigilContainer}>
        {moods.map((mood, index) => (
          <motion.div
            key={index}
            className={`${styles.sigil} ${
              selectedMood === mood ? styles.activeSigil : ""
            }`}
            onClick={() => handleSelect(mood)}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <span>{mood}</span>
          </motion.div>
        ))}
      </div>

      {selectedMood && (
        <motion.p
          className={styles.moodEcho}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          The air now trembles with {selectedMood}.
        </motion.p>
      )}
    </div>
  );
};

export default MoodSigils;