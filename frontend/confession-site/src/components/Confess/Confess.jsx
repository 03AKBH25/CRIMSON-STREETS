import React from 'react'
import styles from './Confess.module.css'

const Confess = () => {
  const relations = [
    {
      id: 1, 
      label: "FAMILY",
      slug: "family",
      description: "Blood ties and silent wounds.",
      emoji: ''
    },
    {
      id: 2,
      label: "Girlfriend",
      slug: "girlfriend",
      description: "Beauty, Brains and peace killer",
      emoji: ''
    },
    {
      id: 3,
      label: "Boyfriend",
      slug: "boyfriend",
      description: "Security, safety and lingering desires.",
      emoji: ''
    },
    {
      id: 4,
      label: "Friend",
      slug: "friend",
      description: "Betrayls or bonds?",
      emoji: ''
    },
    {
      id: 5,
      label: "EX",
      slug: "ex",
      description: "What sill lingers...",
      emoji: ''
    },
    {
      id: 6,
      label: "Wife",
      slug: "wife",
      description: "Promises, pain, and permanence.",
      emoji: ''
    },
    {
      id: 7,
      label: "Husband",
      slug: "husband",
      description: "",
      emoji:''
    },
    {
      id: 8,
      label: "CUSTOMIZE",
      slug: 'customize',
      description: "",
      emoji: ''
    }
  ]

  return (
    <div>
      <h1 className={styles.heading}>Whose Shadow's Haunts Your Heart Tonight</h1>
      <div className={styles.relationsGrid}>
        {relations.map((relation)=>(
          <div key={relation.id} className={styles.relationCard} onClick={()=>handleRedirect(relation.slug)}>
            <div>
              <img src={relation.emoji} className={styles.image} />
              <h1 className={styles.label}>{relation.label}</h1>
            </div>
            <p className={styles.relationDesc}>{relation.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Confess
