import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.scss";

const MainNav = () => {
  return (
    <div className={styles.main}>
      <ul>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to={"/"}
        >
          <li>Rooms</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to={"/likes"}
        >
          <li>Likes</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to={"/matches"}
        >
          <li>Matches</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to={"/messages"}
        >
          <li>Messaggi</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to={"/profile"}
        >
          <li>Profilo</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default MainNav;
