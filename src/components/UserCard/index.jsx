import { useSelector, useDispatch } from "react-redux";
import { peoplelikeDislike } from "../../store/actions";
import styles from "./UserCard.module.scss";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const UserCard = ({ userInfo }) => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const loading = useSelector((store) => store.loading);
  const compatibility = Math.floor(Math.random() * 100) + 1;

  const likeFunc = () => {
    dispatch(
      peoplelikeDislike(
        {
          roomId: user.roomId.roomId,
          roomilike: userInfo._id,
        },
        userInfo._id,
        "addlike"
      )
    );
  };

  const dislikeFunc = () => {
    dispatch(
      peoplelikeDislike(
        {
          roomId: user.roomId.roomId,
          roomilike: userInfo._id,
        },
        userInfo._id,
        "removelike"
      )
    );
  };

  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        <div
          className={styles.cardContainer}
          style={{ backgroundImage: `url(${userInfo.photo})` }}
        >
          <div className={styles.cardText}>
            <h3>
              {userInfo.name} {userInfo.surname}
            </h3>
            <p>
              {userInfo.town} ({userInfo.city})
            </p>
            <div className={styles.flex}>
              <div className={styles.compatibility}>
                <label htmlFor=""> Compatibility {compatibility}%</label>
                <progress value={compatibility} max="100"></progress>
              </div>
              <div>
                {user.roomId.ilike.filter((like) => like.id === userInfo._id)
                  .length > 0 ? (
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
          <h3>
            {userInfo.name} {userInfo.surname}
          </h3>
          <p>
            {userInfo.town} ({userInfo.city})
          </p>
          <p className={styles.roomDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <section className={styles.details}>
            {userInfo.iam.lgbtq === 1 && <p>LOGTQ</p>}
            {userInfo.iam.multicultural === 1 && <p>Multicultural</p>}
            {userInfo.iam.pet_owner === 1 && <p>Pet Owner</p>}
            {userInfo.iam.veg === 1 && <p>Veg</p>}
            {userInfo.iam.party_lover === 1 && <p>Party Lover</p>}
            {userInfo.iam.smooker === 1 && <p>Smooker</p>}
          </section>
          <section className={styles.gallery}>
            <p>Gallery</p>
            {/* map images */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
