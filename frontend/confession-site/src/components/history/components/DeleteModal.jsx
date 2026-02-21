import styles from "./DeleteModal.module.css";

const DeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3 className={styles.title}>
          Delete this confession?
        </h3>

        <p className={styles.text}>
          Once erased, it cannot be restored.
        </p>

        <div className={styles.actions}>
          <button
            className={styles.cancelBtn}
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className={styles.deleteBtn}
            onClick={onConfirm}
          >
            Delete Forever
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;