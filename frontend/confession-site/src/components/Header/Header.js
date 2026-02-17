import styles from './Header.module.css'

const Header = () =>{
    return(
        <div className={styles.parentCont}>
            <div>
                <img src="" className={styles.siteLogo}/>
                <h1 className={styles.mainHead}>CRIMSON STREETS</h1>
            </div>
            <div>
                <button className={styles.profile}>
                    <img src="" className={styles.profilePic} />
                </button>
                <button className={styles.logout}>Logout</button>
            </div>
        </div>
    )
}

export default Header
