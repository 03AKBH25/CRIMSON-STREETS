import React, { useEffect, useState } from "react";
import styles from "./NotSocialMedia.module.css";

const NotSocialMedia = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className={styles.connectionWrapper}>
      <div className={`${styles.container} ${visible ? styles.show : ""}`}>

        <div className={styles.left}>
          <h2 className={styles.heading}>
            Connection Without Exposure
          </h2>

          <p className={styles.description}>
            This is a place where emotions connect
            without identities colliding.
            Where strangers relate
            without needing to know each other’s names.
          </p>

          <p className={styles.softLine}>
            Here, vulnerability is strength —
            and anonymity is protection.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.point}>
            Anonymous, yet deeply human.
          </div>

          <div className={styles.point}>
            Public confessions, private identities.
          </div>

          <div className={styles.point}>
            Empathy without exposure.
          </div>

          <div className={styles.point}>
            Connection without performance.
          </div>
        </div>

      </div>
    </section>
  );
};

export default NotSocialMedia;