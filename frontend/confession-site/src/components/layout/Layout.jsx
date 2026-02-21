import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import styles from './layout.module.css'

const Layout = () => {
    return(
        <div className={styles.container}>
            <Header/>
            <div className={styles.main}>
                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout