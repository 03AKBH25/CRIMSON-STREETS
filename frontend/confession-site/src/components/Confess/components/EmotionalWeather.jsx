import { useEffect, useState } from "react";
import styles from "./EmotionalWeather.module.css";
import { emotionalWeather } from "../data/dummyData";

const EmotionalWeather = () => {
  const [souls, setSouls] = useState(emotionalWeather.baseSouls);
  const [topRelation, setTopRelation] = useState("ex");
  const [dominantEmotion, setDominantEmotion] = useState("Regret");

  useEffect(() => {
    const interval = setInterval(() => {
      // Small fluctuation
      setSouls((prev) => prev + Math.floor(Math.random() * 3) - 1);

      // Random relation
      const randomRelation =
        emotionalWeather.relations[
          Math.floor(Math.random() * emotionalWeather.relations.length)
        ];

      // Random emotion
      const randomEmotion =
        emotionalWeather.emotions[
          Math.floor(Math.random() * emotionalWeather.emotions.length)
        ];

      setTopRelation(randomRelation);
      setDominantEmotion(randomEmotion);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.weatherContainer}>
      <h3 className={styles.title}>Emotional Weather</h3>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.number}>{souls}</span>
          <span className={styles.label}>Souls Confessing</span>
        </div>

        <div className={styles.stat}>
          <span className={styles.number}>{topRelation}</span>
          <span className={styles.label}>Most Whispered Name</span>
        </div>

        <div className={styles.stat}>
          <span className={styles.number}>{dominantEmotion}</span>
          <span className={styles.label}>Dominant Emotion</span>
        </div>
      </div>
    </div>
  );
};

export default EmotionalWeather;