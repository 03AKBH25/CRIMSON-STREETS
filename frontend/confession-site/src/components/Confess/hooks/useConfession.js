import { useState } from "react";

const useConfession = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitConfession = async ({ category, mood,  text }) => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/confession",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ category, mood, text }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit confession");
      }

      const data = await response.json();

      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { submitConfession, loading, error };
};

export default useConfession;