import styles from "./Backdrop.module.css";

const Backdrop = ({ onClose, isClosing }) => {
  return (
    <div
      className={`${styles.backdrop} ${isClosing ? styles.closing : ""}`}
      onClick={onClose}
    ></div>
  );
};

export default Backdrop;