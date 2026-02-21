import styles from "./EmptyState.module.css";

const EmptyState = () => {
  return (
    <div className={styles.empty}>
      <h2>Silence...</h2>
      <p>You have confessed nothing yet.</p>
    </div>
  );
};

export default EmptyState;