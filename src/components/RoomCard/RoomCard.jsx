import styles from "./RoomCard.module.scss";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const RoomCard = (props) => {
  const img =
    props.img ||
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";
  const type = props.type || "Single Room";
  const location = props.location || "Palermo, via Maqueda";
  const compatibility = props.compatibility || "Compatibility";
  const rate = props.rate || "80";

  return (
    <div className={styles.cardContainer}>
      <img
        className={`${styles.cardImg} ${styles.cardImgFirst}`}
        src={img}
        alt="room"
      />
      <div className={styles.cardText}>
        <h3>{type}</h3>
        <p>{location}</p>
        <div className={styles.flex}>
          <div className={styles.compatibility}>
            <label htmlFor={props.id}>{compatibility}</label>
            <progress id={props.id} value={rate} max="100"></progress>
          </div>
          <div>
            <FiHeart className={`${styles.outlineHeart} ${styles.icon}`} />
            <FaHeart className={`${styles.fillHeart} ${styles.icon}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
