import { Link } from "react-router-dom";
import styles from "./RoomAd.module.scss";
import { FaHeart } from "react-icons/fa";

const RoomAd = ({ room }) => {
  return (
    <div className={styles.main}>
      <Link to={"/roomdetails"} state={room.roomId}>
        <div className={styles.roomComp}>
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${room.roomPhotos})` }}
          >
            <div className={styles.likes}>
              <span>
                {
                  room.wholikesme.filter(user => user.room?.roomId === "")
                    .length
                }
              </span>
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
      </Link>
    </div>
  );
};

export default RoomAd;
