import styles from "./FilterBar.module.css";

const filters = [
  "all",
  "family",
  "girlfriend",
  "boyfriend",
  "friend",
  "ex",
  "wife",
  "husband",
  "customize"
];

const FilterBar = ({ activeFilter, onFilterChange }) => {
  return (
    <div className={styles.filterContainer}>
      {filters.map((filter) => (
        <button
          key={filter}
          className={`${styles.filterBtn} ${
            activeFilter === filter ? styles.active : ""
          }`}
          onClick={() => onFilterChange(filter)}
        >
          {filter.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;