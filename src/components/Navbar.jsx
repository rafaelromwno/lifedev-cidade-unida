import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom"
import { useAuthentication } from "../hooks/useAuthetication";
import { useAuthValue } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useAuthentication()
  const { user } = useAuthValue()
  console.log(user)
  return (
    <>
      <nav className="styles.navbar">
        <ul className={styles.links_list}>
          <NavLink to="/" className={styles.brand} activeclassname={styles.active}>
            <li><span>Life</span>Dev</li>
          </NavLink>
          {!user && (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >Entrar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >Cadastrar
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
                >Novo Post
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >Dashboard
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >Sobre
            </NavLink>
          </li>
          <button onClick={logout} className={styles.exit}>Exit</button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
