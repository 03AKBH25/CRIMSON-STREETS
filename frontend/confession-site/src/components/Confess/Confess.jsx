import EmotionalWeather from "./components/EmotionalWeather";
import { useState } from "react";
import styles from "./Confess.module.css";

import RelationCard from "./components/RelationCard";
import ConfessionModal from "./components/ConfessionModal";
import Backdrop from "./components/Backdrop";
import ModalPortal from "./portal/ModalPortal";

const Confess = () => {
  const [selectedRelation, setSelectedRelation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const relations = [
    { id: 1, label: "FAMILY", slug: "family", description: "Blood ties and silent wounds." },
    { id: 2, label: "Girlfriend", slug: "girlfriend", description: "Beauty, Brains and peace killer" },
    { id: 3, label: "Boyfriend", slug: "boyfriend", description: "Security, safety and lingering desires." },
    { id: 4, label: "Friend", slug: "friend", description: "Betrayals or bonds?" },
    { id: 5, label: "EX", slug: "ex", description: "What still lingers..." },
    { id: 6, label: "Wife", slug: "wife", description: "Promises, pain, and permanence." },
    { id: 7, label: "Husband", slug: "husband", description: "" },
    { id: 8, label: "CUSTOMIZE", slug: "customize", description: "" }
  ];

  const handleOpenModal = (relation) => {
    setSelectedRelation(relation);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedRelation(null);
    setIsModalOpen(false);
  };

  const handleSubmitConfession = (text) => {
    console.log("Confession:", text);
    console.log("Category:", selectedRelation.slug);

    // Backend integration will go here next step

    handleCloseModal();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Whose Shadow Haunts Your Heart Tonight?
      </h1>

      <div className={styles.relationsGrid}>
        {relations.map((relation) => (
          <RelationCard
            key={relation.id}
            relation={relation}
            onClick={() => handleOpenModal(relation)}
          />
        ))}
      </div>
      
      <EmotionalWeather/>

      {isModalOpen && (
        <ModalPortal>
          <>
            <Backdrop onClose={handleCloseModal} />
            <ConfessionModal
              relation={selectedRelation}
              onClose={handleCloseModal}
              onSubmit={handleSubmitConfession}
            />
          </>
        </ModalPortal>
      )}
    </div>
  );
};

export default Confess;