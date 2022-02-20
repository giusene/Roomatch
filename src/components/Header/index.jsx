import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.logo}>ROOMATCH</h1>
    </div>
  );
};

export default Header;
