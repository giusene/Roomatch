import { Link } from "react-router-dom";
import styles from "./RoomAd.module.scss";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteRoom } from "../../store/actions";

const RoomAd = ({ room }) => {
  const dispatch = useDispatch()

  const removeRoom = () => {
    dispatch(deleteRoom(room.roomId));
    }

  return (
    <div className={styles.main}>
      <Link to={"/roomdetails"}>
        <div className={styles.roomComp}>
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${room.roomPhotos})` }}
          >
            <div className={styles.likes}>
              <span>{room.wholikesme.filter(user => user.room?.roomId === '').length}</span>
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
      <div className={styles.btnSet}>
          <button onClick={() => removeRoom()}>Remove Room</button>
      </div>
    </div>
  );
};

export default RoomAd;
