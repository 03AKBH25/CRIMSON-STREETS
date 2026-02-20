// src/components/home/SummonRitual.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./home.module.css";
import { ritualSecrets } from "./homeData";

const SummonRitual = () => {
  const [revealedSecret, setRevealedSecret] = useState(null);

  const summonSecret = () => {
    const random =
      ritualSecrets[Math.floor(Math.random() * ritualSecrets.length)];
    setRevealedSecret(random);
  };

  const closeSecret = () => {
    setRevealedSecret(null);
  };

  return (
    <div className={styles.ritualSection}>
      <h2 className={styles.ritualTitle}>Summon a Lost Soul</h2>

      <button className={styles.ritualButton} onClick={summonSecret}>
        Begin the Ritual
      </button>

      <AnimatePresence>
        {revealedSecret && (
          <>
            {/* Dark Overlay */}
            <motion.div
              className={styles.ritualOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              onClick={closeSecret}
            />

            {/* Secret Card */}
            <motion.div
              className={styles.secretCard}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1 }}
            >
              <p className={styles.secretText}>{revealedSecret}</p>
              <button
                className={styles.closeSecret}
                onClick={closeSecret}
              >
                Return to Silence
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SummonRitual;