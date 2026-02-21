import styles from './Header.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext' 
import hearts from '../../assets/hearts.png';

const Header = () =>{

    const {user, logout} = useContext(AuthContext)
    const navigate = useNavigate()
    const [showDropdown, setShowDropdown] = useState(false)

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return(
        <div className={styles.parentCont}>
            <div className={styles.headCont}>
                <h1 className={styles.mainHead}>CRIMSON</h1>
                <img src={hearts} className={styles.siteLogo}/>
                <h1 className={styles.mainHead}>STREETS</h1>
            </div>
            <div className={styles.optionsCont}>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/your-sins">Your Thoughts</NavLink>
                <NavLink to="/confess/family">Confession</NavLink>
            </div>
            {user && (
                <div 
                    className={styles.profileWrapper}
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                >
                    <button className={styles.profile}>
                        <img 
                            src="https://www.clipartmax.com/png/middle/277-2778393_avatar.png" 
                            alt="profile"
                            className={styles.profilePic}
                        />
                    </button>

                    {showDropdown && (
                        <div className={styles.dropdown}>
                            <p className={styles.dropdownItem}>My Profile</p>
                            <p className={styles.dropdownItem}>Settings</p>
                            <p 
                                className={styles.dropdownItem}
                                onClick={handleLogout}
                            >
                                Logout
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Header
