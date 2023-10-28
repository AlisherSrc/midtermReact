import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {

    return <>
        <nav className={`${styles.navbar}`}>
            <Link to="/" className={styles.logo}>Twix</Link>
            <Link to="/profile" className={styles.profile} >Profile</Link>
        </nav>
    </>

}

export default Navbar;