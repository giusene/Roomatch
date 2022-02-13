import styles from "./LikesCard.module.scss";

const LikesCard = ({ user }) => {
  return (
    <div
      className={styles.cardContainer}
      style={{ backgroundImage: `url(${user.photo})` }}
    >
      {console.log(user)}
      <div className={styles.info}>
        <p className={styles.name}>
          {user.name} {user.surname}
        </p>
        <p className={styles.city}>{user.town} ({user.city})</p>
      </div>
    </div>
  );
};

export default LikesCard;
