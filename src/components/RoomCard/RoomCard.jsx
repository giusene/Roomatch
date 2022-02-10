import { useSelector, useDispatch } from "react-redux";
import { likeDislike } from "../../store/actions";
import styles from "./RoomCard.module.scss";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const RoomCard = ({ room }) => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const loading = useSelector((store) => store.loading);
  const compatibility = Math.floor(Math.random() * 100) + 1


  const likeFunc = () => {
    dispatch(
      likeDislike(
        {
          userId: user._id,
          ilike: [...user.ilike, room._id],
        },
        room._id,
        "addlike"
      )
    );
  };

  const dislikeFunc = () => {
    dispatch(
      likeDislike(
        {
          userId: user._id,
          ilike: user.ilike.filter((like) => like !== room._id),
        },
        room._id,
        "removelike"
      )
    );
  };

  return (
    <div
      className={styles.cardContainer}
      style={{ backgroundImage: `url(${room.roomPhotos[0]})` }}
    >
      <div className={styles.cardText}>
        <h3>{room.type}</h3>
        <p>
          {room.town} ({room.city}) {room.Address}
        </p>
        <div className={styles.flex}>
          <div className={styles.compatibility}>
            <label htmlFor="">Compatibility {compatibility}%</label>
            <progress value={compatibility} max="100"></progress>
          </div>
          <div>
            {user.ilike.filter((like) => like === room._id).length > 0 ? (
              <FaHeart 
                onClick={() => !loading && dislikeFunc()}
                className={`${styles.fillHeart} ${styles.icon}`}
              />
            ) : (
              <FiHeart
                onClick={() => !loading && likeFunc()}
                className={`${styles.outlineHeart} ${styles.icon}`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
