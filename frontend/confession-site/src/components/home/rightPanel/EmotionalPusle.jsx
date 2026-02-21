import React, { useEffect, useState } from "react";
import styles from "./EmotionalPulse.module.css";
import { emotionalStats } from "../../../data/emotions";

const EmotionalPulse = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Slight randomization to feel alive
    const updated = emotionalStats.map(item => ({
      ...item,
      value: Math.floor(Math.random() * 30) + 20
    }));

    setStats(updated);
  }, []);

  return (
    <div className={styles.pulseWrapper}>
      <h3 className={styles.title}>Emotional Pulse</h3>

      {stats.map((item, index) => (
        <div key={index} className={styles.stat}>
            <div className={styles.labelRow}>
                <span>{item.label}</span>
                <span>{item.value}%</span>
            </div>
            <div className={styles.bar}>
                <div
                className={styles.fill}
                style={{ width: `${item.value}%` }}
                />
            </div>
        </div>
      ))}
    </div>
  );
};

export default EmotionalPulse;