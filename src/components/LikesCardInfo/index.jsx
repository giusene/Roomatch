import styles from "./LikesCardInfo.module.scss";
import { IoIosCloseCircle } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { likeDislike, peoplelikeDislike } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const LikesCardInfo = ({ data, showInfo, setShowInfo, isRoom }) => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.loading);
  const loggedUser = useSelector((store) => store.user);

  const currentItemDetails = isRoom ? data.friendlyWith : data.iam;
  const currentItem = data;
  console.log("data: ", currentItem)

  const likeFunc = () => {
    dispatch(isRoom
      ? likeDislike(
        {
          userId: loggedUser._id,
          ilike: currentItem.roomId,
        },
        currentItem.roomId,
        "addlike"
      )
      : peoplelikeDislike(
        {
          roomId: loggedUser.roomId.roomId,
          roomilike: currentItem.id,
        },
        currentItem.id,
        "addlike"
      )
    );
  };

  const genericDetails = () => (
    <fieldset className={styles.fieldset}>
      <legend>Friendly for</legend>
      <section>
        <div className={styles.flexColumn}>
          <div>
            <label className={styles.labelContainer} htmlFor="lgbtq">
              LGBTQ+
              <input
                readOnly
                type="checkbox"
                name="action"
                id="lgbtq"
                checked={currentItemDetails.lgbtq === 1 ? true : false}
              />
              <span className={styles.mark}></span>
            </label>
          </div>
          <div>
            <label className={styles.labelContainer} htmlFor="pet_owner">
              Pet owner
              <input
                readOnly
                type="checkbox"
                name="action"
                checked={currentItemDetails.pet_owner === 1 ? true : false}
                id="pet_owner"
              />
              <span className={styles.mark}></span>
            </label>
          </div>
          <div>
            <label
              className={styles.labelContainer}
              htmlFor="multicultural"
            >
              Multicultural
              <input
                readOnly
                type="checkbox"
                name="action"
                id="multicultural"
                checked={currentItemDetails.multicultural === 1 ? true : false}
              />
              <span className={styles.mark}></span>
            </label>
          </div>
        </div>
        <div className={styles.flexColumn}>
          <div>
            <label className={styles.labelContainer} htmlFor="veg">
              Veg
              <input
                readOnly
                type="checkbox"
                name="action"
                id="veg"
                checked={currentItemDetails.veg === 1 ? true : false}
              />
              <span className={styles.mark}></span>
            </label>
          </div>
          <div>
            <label className={styles.labelContainer} htmlFor="smooker">
              Smoker
              <input
                readOnly
                type="checkbox"
                name="action"
                id="smooker"
                checked={currentItemDetails.smooker === 1 ? true : false}
              />
              <span className={styles.mark}></span>
            </label>
          </div>

          <div>
            <label className={styles.labelContainer} htmlFor="party">
              Party lover
              <input
                readOnly
                type="checkbox"
                name="action"
                id="party"
                checked={currentItemDetails.party_lover === 1 ? true : false}
              />
              <span className={styles.mark}></span>
            </label>
          </div>
        </div>
      </section>
    </fieldset>
  );

  const roomDetails = () => (
    <>
      <div className={styles.flexHeaderInfo}>
        <div className={styles.headerInfo}>
          <h3>
            {data.roomType} room
          </h3>
          <div className={styles.subHeader}>
            <p>in {data.roomAddress}</p>
            <p>
              {data.town} ({data.city})
            </p>
          </div>
        </div>

        <div className={styles.likeBtn}>
          <FiHeart
            onClick={() => !loading && likeFunc()}
            className={`${styles.outlineHeart} ${styles.icon}`}
          />
        </div>
      </div>
      {genericDetails()}
    </>
  );

  const userDetails = () => (
    <>
      <div className={styles.flexHeaderInfo}>
        <div className={styles.headerInfo}>
          <h3>
            {data.name} {data.surname}
          </h3>
          <div className={styles.subHeader}>
            <p>
              from {data.town} ({data.city})
            </p>
          </div>
        </div>

        <div className={styles.likeBtn}>
          <FiHeart
            onClick={() => !loading && likeFunc()}
            className={`${styles.outlineHeart} ${styles.icon}`}
          />
        </div>
      </div>
      {genericDetails()}
    </>
  );

  return (
    <div className={styles.background}>
      <div className={styles.closeBtn} to="/">
        <IoIosCloseCircle onClick={() => setShowInfo(!showInfo)} />
      </div>
      <div className={styles.modalInfo}>
        {isRoom ? roomDetails() : userDetails()}
      </div>
    </div>
  );
};

export default LikesCardInfo;
