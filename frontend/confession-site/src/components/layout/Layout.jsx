import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import styles from './layout.module.css'

const Layout = () => {
    return(
        <div className={styles.container}>
            <Header/>
            <div className={styles.main}>
                <Sidebar/>
                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout