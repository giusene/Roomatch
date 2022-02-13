import styles from "./RoomAd.module.scss";
import { FaHeart } from "react-icons/fa";

const RoomAd = ({ room }) => {
  return (
    <div className={styles.main}>
      {console.log(room)}
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${room.roomPhotos})` }}
      >
        <div className={styles.likes}>
          <span>{room.wholikesme.length}</span>
          <FaHeart />
        </div>
      </div>
      <div className={styles.info}>
        <h3>{room.roomType}</h3>
        <p>
          {room.town} ({room.city})
        </p>
      </div>
    </div>
  );
};

export default RoomAd;
