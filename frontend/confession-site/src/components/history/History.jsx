import React from 'react'
import styles from './history.module.css'

const relations = [
    {
        id:1,
        label:"FAMILY"
    },
    {
        id:2,
        label:"Girlfriend"
    },
    {
        id:3,
        label:"Boyfriend"
    },
    {
        id:4,
        label:"EX"
    },
    {
        id:5,
        label:"Wife"
    },
    {
        id:6,
        label:"Husband"
    },
    {
        id:7,
        label:"Friend"
    }
]

const History = () => {
  return (
    <div>
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

export default History
