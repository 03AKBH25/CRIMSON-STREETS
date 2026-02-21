import styles from "./ConfessionCard.module.css";

const ConfessionCard = ({ confession, onDelete }) => {
  const formattedDate = new Date(confession.createdAt).toLocaleString();

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.category}>
          {confession.category.toUpperCase()}
        </span>

        <span className={styles.mood}>
          {confession.mood}
        </span>

        <span className={styles.date}>
          {formattedDate}
        </span>
      </div>

      <p className={styles.text}>{confession.text}</p>

      <button
        className={styles.deleteBtn}
        onClick={() => onDelete(confession._id, confession.isDummy)}
        >
        Delete
      </button>
    </div>
  );
};

export default ConfessionCard;