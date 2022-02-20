import { RiRainbowLine, RiPlantFill } from "react-icons/ri";
import { GiCat, GiPartyPopper } from "react-icons/gi";
import { FaHandSpock, FaSmoking } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { likeDislike } from "../../store/actions";
import styles from "./RoomCard.module.scss";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import PhotoGallery from "../PhotoGallery";
import { useRef } from "react";

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
          ilike: room._id,
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
          ilike: room._id,
        },
        room._id,
        "removelike"
      )
    );
  };

  const swipe = useRef();
  const sliderCommands = (el, dir) => {
    if (dir === "right") el.current.style.right = `calc(100% - 1%)`;
    if (dir === "left") el.current.style.right = `0`;
    // if (el.current.style.right > 10) el.current.style.right = `0`;
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
                  {user.ilike.filter((like) => like.roomId === room._id)
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
                <h3>Single room{room.type}</h3>
                <p>
                  {room.town} ({room.city}) {room.Address}
                </p>
              </div>
              <div className={styles.likeBtn}>
                {user.ilike.filter((like) => like.roomId === room._id).length >
                0 ? (
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
                  <span
                    className={
                      room.friendlyWith.lgbtq === "1" ? styles.active : ""
                    }
                  >
                    <RiRainbowLine />
                  </span>
                  LGBTQ+
                </div>
                <div className={styles.char}>
                  <span
                    className={
                      room.friendlyWith.pet_owner === "1" ? styles.active : ""
                    }
                  >
                    <GiCat />
                  </span>
                  Pet Owner
                </div>
                <div className={styles.char}>
                  <span
                    className={
                      room.friendlyWith.multicultural === "1"
                        ? styles.active
                        : ""
                    }
                  >
                    <FaHandSpock />
                  </span>
                  Multicultural
                </div>
                <div className={styles.char}>
                  <span
                    className={
                      room.friendlyWith.veg === "1" ? styles.active : ""
                    }
                  >
                    <RiPlantFill />
                  </span>
                  Veg
                </div>
                <div className={styles.char}>
                  <span
                    className={
                      room.friendlyWith.smooker === "1" ? styles.active : ""
                    }
                  >
                    <FaSmoking />
                  </span>
                  Smoker
                </div>
                <div className={styles.char}>
                  <span
                    className={
                      room.friendlyWith.party_lover === "1" ? styles.active : ""
                    }
                  >
                    <GiPartyPopper />
                  </span>
                  Party Lover
                </div>
              </div>
            </section>
            <section className={styles.gallery}>
              <p>Gallery</p>
              <PhotoGallery photos={room.roomPhotos} />
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

export default RoomCard;
