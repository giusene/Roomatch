import { useSelector, useDispatch } from "react-redux";
import { likeDislike } from "../../store/actions";
import styles from "./RoomCard.module.scss";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import RoomAd from "../RoomAd";

const RoomCard = ({ room }) => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const loading = useSelector((store) => store.loading);
  const compatibility = Math.floor(Math.random() * 100) + 1;

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
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
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
                <label htmlFor=""> Compatibility {compatibility}%</label>
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

        <div className={styles.infoCardContainer}>
          <h3>Single room{room.type}</h3>
          <p>
            {room.town} ({room.city}) {room.Address}
          </p>
          <p className={styles.roomDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. {room.description}
          </p>
          <section className={styles.details}>
            <p>LOGTQ</p>
            <p>Party Lover</p>
            <p>Smoker</p>
          </section>
          <section className={styles.gallery}>
            <p>Gallery</p>
            <RoomAd room={room} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
