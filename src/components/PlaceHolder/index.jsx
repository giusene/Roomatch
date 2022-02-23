import styles from "./PlaceHolder.module.scss";

const PlaceHolder = () => {
  return (
    <div className={styles.main}>
      <div className={styles.img}></div>
      <div className={styles.cloud}>
        <p>Mhhh!</p>
        <p>Nothing here!</p>
      </div>
    </div>
  );
};

export default PlaceHolder;
