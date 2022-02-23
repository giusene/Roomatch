import styles from "./Header.module.scss";
import TopNav from "./../TopNav";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.headerContainer}>
        <h1 className={styles.logo}>ROOMATCH</h1>
        <TopNav />
      </div>
    </div>
  );
};

export default Header;
