import styles from "./RelationCard.module.css";

const RelationCard = ({ relation, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <h2 className={styles.label}>{relation.label}</h2>
      <p className={styles.description}>{relation.description}</p>
    </div>
  );
};

export default RelationCard;