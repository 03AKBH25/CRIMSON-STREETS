import React, { useState } from "react";
import styles from "./EmotionalMeter.module.css";

const EmotionalMeter = () => {
  const [level, setLevel] = useState(60);

  const increase = () => {
    if (level < 100) setLevel(level + 10);
  };

  const decrease = () => {
    if (level > 0) setLevel(level - 10);
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Heart Weight</h3>

      <div className={styles.meterContainer}>
        <div
          className={styles.meterFill}
          style={{ height: `${level}%` }}
        />
      </div>

      <div className={styles.controls}>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>−</button>
      </div>
    </div>
  );
};

export default EmotionalMeter;