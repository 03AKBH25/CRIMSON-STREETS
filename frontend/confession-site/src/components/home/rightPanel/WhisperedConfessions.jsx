import React, { useEffect, useState } from "react";
import styles from "./WhisperedConfessions.module.css";
import { dummyConfessions } from "../../../data/confessions";

const WhisperedConfessions = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev =>
        prev === dummyConfessions.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Whispers From the Vault</h3>

      <div className={styles.confession}>
        “{dummyConfessions[current].text}”
      </div>

      <div key={current} className={styles.confession}>
        “{dummyConfessions[current].text}”
      </div>
    </div>
  );
};

export default WhisperedConfessions;