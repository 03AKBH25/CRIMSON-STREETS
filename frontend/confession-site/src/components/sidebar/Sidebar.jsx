import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './sidebar.module.css'
import sidebar from '../../assets/sidebar.jpg'


const Sidebar = () => {
  return (
    <div className={styles.sidebar}
      style={{
        backgroundImage:`url(${sidebar})`,
        backgroundSize:"cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/your-sins">
        Your Thoughts
      </NavLink>
      <NavLink to="/confess/family">
        Confession
      </NavLink>
    </div>
  )
}

export default Sidebar
