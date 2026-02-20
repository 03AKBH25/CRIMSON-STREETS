import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
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
