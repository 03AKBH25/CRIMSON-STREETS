import React, { useEffect, useState } from "react";
import styles from "./NotSocialMedia.module.css";

const NotSocialMedia = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className={styles.notWrapper}>
      <div className={`${styles.container} ${visible ? styles.show : ""}`}>

        <h2 className={styles.heading}>
          Beyond Social Media
        </h2>

        <div className={styles.split}>

          <div className={styles.left}>
            <h3>What We Are Not</h3>
            <ul>
              <li>No followers.</li>
              <li>No public profiles.</li>
              <li>No comment wars.</li>
              <li>No validation chasing.</li>
            </ul>
          </div>

          <div className={styles.right}>
            <h3>What We Are</h3>
            <ul>
              <li>Anonymous expression.</li>
              <li>Emotional release.</li>
              <li>Silent understanding.</li>
              <li>A safe place for truth.</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default NotSocialMedia;