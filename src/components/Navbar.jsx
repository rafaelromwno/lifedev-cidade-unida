import styles from './Navbar.module.css'
import {NavLink} from "react-router"

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.links_list}>
          <NavLink to="/" className={styles.brand} activeclassname={styles.active}>
          <li><span>Life</span>Dev</li>
          </NavLink>
          <NavLink to="/login" className={styles.link} activeclassname={styles.active}>
          <li>Login</li>
          </NavLink>
          <NavLink to="/register" className={styles.link} activeclassname={styles.active}>
          <li>Register</li>
          </NavLink>
          <button className={styles.exit}>Exit</button>
        </ul>
      </nav>
    </>
  )
}

export default Navbar