// src/components/home/WhisperWall.jsx

import React from "react";
import styles from "./home.module.css";
import { whispers } from "./homeData";

const WhisperWall = () => {
  return (
    <div className={styles.whisperSection}>
      <div className={styles.whisperTrack}>
        {[...whispers, ...whispers].map((line, index) => (
          <span key={index} className={styles.whisperText}>
            {line}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WhisperWall;