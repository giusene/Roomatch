import styles from "./Header.module.scss";
import TopNav from "./../TopNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.headerContainer}>
        <Link to={"/list"}>
          <h1 className={styles.logo}>ROOMATCH</h1>
        </Link>
        <TopNav />
      </div>
    </div>
  );
};

export default Header;
