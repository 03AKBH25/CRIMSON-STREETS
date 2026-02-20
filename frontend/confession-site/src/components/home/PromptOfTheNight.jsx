// src/components/home/PromptOfTheNight.jsx

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import styles from "./home.module.css";
import { prompts } from "./homeData";

const PromptOfTheNight = () => {
  // Pick random prompt on reload
  const tonightPrompt = useMemo(() => {
    return prompts[Math.floor(Math.random() * prompts.length)];
  }, []);

  return (
    <div className={styles.promptSection}>
      <motion.div
        className={styles.promptContainer}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className={styles.promptTitle}>Tonight's Decree</h3>

        <p className={styles.promptText}>
          {tonightPrompt}
        </p>
      </motion.div>
    </div>
  );
};

export default PromptOfTheNight;