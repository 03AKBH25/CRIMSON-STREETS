import { useState } from "react";
import styles from "./ConfessionModal.module.css";
import useConfession from "../hooks/useConfession";

const moodOptions = [
  "Regret",
  "Guilt",
  "Anger",
  "Longing",
  "Shame",
  "Love"
];

const ConfessionModal = ({ relation, onClose }) => {
  const [text, setText] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showDiscardConfirm, setShowDiscardConfirm] = useState(false);

  const { submitConfession, loading, error } = useConfession();

  const handleSubmit = async () => {
    if (!text.trim() || !selectedMood || isSuccess) return;

    const result = await submitConfession({
      category: relation.slug,
      mood: selectedMood,
      text,
    });

    if (result) {
      setIsSuccess(true);

      setTimeout(() => {
        setIsClosing(true);

        setTimeout(() => {
          setText("");
          setSelectedMood("");
          setIsSuccess(false);
          setIsClosing(false);
          onClose();
        }, 400);
      }, 1800);
    }
  };

  const handleAttemptClose = () => {
    if (text.trim() && !isSuccess) {
      setShowDiscardConfirm(true);
    } else {
      onClose();
    }
  };

  const handleDiscard = () => {
    setShowDiscardConfirm(false);
    setText("");
    setSelectedMood("");
    onClose();
  };

  return (
    <div
      className={`${styles.modal}
      ${isSuccess ? styles.success : ""}
      ${isClosing ? styles.closing : ""}`}
    >
      {!showDiscardConfirm ? (
        <>
          <button
            className={styles.closeBtn}
            onClick={handleAttemptClose}
            disabled={isSuccess}
          >
            ×
          </button>

          <h2 className={styles.title}>
            Confessing about: <span>{relation.label}</span>
          </h2>

          <p className={styles.subtitle}>
            Speak freely. No one else can see this but you.
          </p>

          {/* Mood Selector */}
          <div className={styles.moodContainer}>
            {moodOptions.map((mood) => (
              <button
                key={mood}
                type="button"
                className={`${styles.moodBtn} ${
                  selectedMood === mood ? styles.activeMood : ""
                }`}
                onClick={() => setSelectedMood(mood)}
                disabled={isSuccess}
              >
                {mood}
              </button>
            ))}
          </div>

          <textarea
            className={styles.textarea}
            placeholder="Write what you have never said..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isSuccess}
          />

          {(!selectedMood && text.trim()) && (
            <p className={styles.error}>
              Please select a mood before releasing.
            </p>
          )}

          {error && <p className={styles.error}>{error}</p>}

          <button
            className={styles.submitBtn}
            onClick={handleSubmit}
            disabled={loading || isSuccess}
          >
            {isSuccess
              ? "Released..."
              : loading
              ? "Releasing..."
              : "Release"}
          </button>
        </>
      ) : (
        <div className={styles.discardContainer}>
          <h3 className={styles.discardTitle}>
            Discard this confession?
          </h3>

          <p className={styles.discardText}>
            These words will vanish into silence.
          </p>

          <div className={styles.discardActions}>
            <button
              className={styles.continueBtn}
              onClick={() => setShowDiscardConfirm(false)}
            >
              Continue Writing
            </button>

            <button
              className={styles.discardBtn}
              onClick={handleDiscard}
            >
              Discard
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfessionModal;