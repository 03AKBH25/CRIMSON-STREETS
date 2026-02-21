import { useEffect, useState } from "react";
import styles from "./History.module.css";
import { normalizedDummyConfessions } from "./data/dummyHistoryData";
import ConfessionCard from "./components/ConfessionCard";
import FilterBar from "./components/FilterBar";
import EmptyState from "./components/EmptyState";
import DeleteModal from "./components/DeleteModal";

const History = () => {
  const [confessions, setConfessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [deleteTarget, setDeleteTarget] = useState(null);

  const token = localStorage.getItem("token");

  const fetchConfessions = async (category = "all") => {
    try {
      setLoading(true);
      setError(null);
  
      let backendData = [];
  
      const url =
        category !== "all"
          ? `http://localhost:5000/api/confession/category/${category}`
          : `http://localhost:5000/api/confession/history`;
  
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (res.ok) {
        backendData = await res.json();
      }
  
      // Filter dummy data manually
      const filteredDummy =
        category === "all"
          ? normalizedDummyConfessions
          : normalizedDummyConfessions.filter(
              (item) => item.category === category
            );
  
      // Merge both
      const merged = [...backendData, ...filteredDummy];
  
      // Optional: sort by date (latest first)
      merged.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
  
      setConfessions(merged);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConfessions();
  }, []);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    fetchConfessions(category);
  };

  const handleDeleteLocal = async (id, isDummy) => {
    if (isDummy) {
        // Only remove locally
        setConfessions((prev) =>
        prev.filter((item) => item._id !== id)
        );
        return;
    }

    try {
        const res = await fetch(
        `http://localhost:5000/api/confession/${id}`,
        {
            method: "DELETE",
            headers: {
            Authorization: `Bearer ${token}`,
            },
        }
        );

        if (!res.ok) {
        throw new Error("Failed to delete confession");
        }

        setConfessions((prev) =>
        prev.filter((item) => item._id !== id)
        );

    } catch (err) {
        console.error(err);
    }
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
  
    await handleDeleteLocal(
      deleteTarget.id,
      deleteTarget.isDummy
    );
  
    setDeleteTarget(null);
  };

  return (
    <div className={styles.container}>
  
        {/* Background Layer */}
        <div className={styles.backgroundLayer}>
            <div className={styles.emberOne}></div>
            <div className={styles.emberTwo}></div>
            <div className={styles.emberThree}></div>
        </div>

        {/* Foreground Content */}
        <div className={styles.content}>
            <h1 className={styles.heading}>Your Echoes in the Dark</h1>

            <FilterBar
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            />

            {loading && <div className={styles.loader}></div>}
            {error && <p className={styles.error}>{error}</p>}
            {!loading && !error && confessions.length === 0 && <EmptyState />}

            {!loading && !error && confessions.length > 0 && (
            <div className={styles.grid}>
                {confessions.map((confession) => (
                <ConfessionCard
                    key={confession._id}
                    confession={confession}
                    onDelete={(id, isDummy) =>
                    setDeleteTarget({ id, isDummy })
                    }
                />
                ))}
            </div>
            )}
        </div>

        {deleteTarget && (
            <DeleteModal
            onConfirm={confirmDelete}
            onCancel={() => setDeleteTarget(null)}
            />
        )}
    </div>
  );
};

export default History;