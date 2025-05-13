import { useAuthValue } from "../context/AuthContext"
import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {

  const { user } = useAuthValue()

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand} activeClassName={styles.active}>
        <li><span>Life</span>Dev</li>
      </NavLink>
      <ul className={styles.links_list}>

        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>

        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Cadastrar
              </NavLink>
            </li>
          </>
        )}

        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>

        <button className={styles.exit}>Exit</button>

      </ul>
    </nav>
  )
}

export default Navbar