import { useSelector, useDispatch } from "react-redux";
import { peoplelikeDislike } from "../../store/actions";
import styles from "./UserCard.module.scss";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { useRef, useEffect } from "react";
import { RiRainbowLine, RiPlantFill } from "react-icons/ri";
import { GiCat, GiPartyPopper } from "react-icons/gi";

import { FaHandSpock, FaSmoking } from "react-icons/fa";

const UserCard = ({ setResult, userInfo }) => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const loading = useSelector(store => store.loading);

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

  useEffect(() => {
    setResult(true);
  }, [setResult]);

  const swipe = useRef();
  const sliderCommands = (el, dir) => {
    if (dir === "right") el.current.style.right = `calc(100% - 1%)`;
    if (dir === "left") el.current.style.right = `0`;
  };

  return (
    <div className={styles.main}>
      <div className={styles.slider}>
        <div
          className={styles.sliderWrapper}
          style={{ right: `0` }}
          ref={swipe}
        >
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
                  <label htmlFor="">
                    Compatibility {userInfo.compatibility}%
                  </label>
                  <progress value={userInfo.compatibility} max="100"></progress>
                </div>
                <div>
                  {user.roomId.ilike.filter(like => like.id === userInfo._id)
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
            <button
              className={styles.rightBtn}
              onClick={() => sliderCommands(swipe, "right")}
            >
              <BsArrowRightCircle />
            </button>
          </div>

          <div className={styles.infoCardContainer}>
            <div className={styles.headerCardInfo}>
              <div className={styles.title}>
                <h3>
                  {userInfo.name} {userInfo.surname}
                </h3>
                <p>
                  {userInfo.town} ({userInfo.city})
                </p>
              </div>
              <div className={styles.likeBtn}>
                {user.roomId.ilike.filter(like => like.id === userInfo._id)
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
            <section className={styles.details}>
              <p className={styles.charTitle}>Friendly for</p>
              <div className={styles.charSet}>
                <div className={styles.char}>
                  <span className={user.iam.lgbtq === 1 ? styles.active : ""}>
                    <RiRainbowLine />
                  </span>
                  LGBTQ+
                </div>
                <div className={styles.char}>
                  <span
                    className={user.iam.pet_owner === 1 ? styles.active : ""}
                  >
                    <GiCat />
                  </span>
                  Pet Owner
                </div>
                <div className={styles.char}>
                  <span
                    className={
                      user.iam.multicultural === 1 ? styles.active : ""
                    }
                  >
                    <FaHandSpock />
                  </span>
                  Multicultural
                </div>
                <div className={styles.char}>
                  <span className={user.iam.veg === 1 ? styles.active : ""}>
                    <RiPlantFill />
                  </span>
                  Veg
                </div>
                <div className={styles.char}>
                  <span className={user.iam.smooker === 1 ? styles.active : ""}>
                    <FaSmoking />
                  </span>
                  Smoker
                </div>
                <div className={styles.char}>
                  <span
                    className={user.iam.party_lover === 1 ? styles.active : ""}
                  >
                    <GiPartyPopper />
                  </span>
                  Party Lover
                </div>
              </div>
            </section>
            <button
              className={styles.leftBtn}
              onClick={() => sliderCommands(swipe, "left")}
            >
              <BsArrowLeftCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
