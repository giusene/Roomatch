import styles from "./LikesCardInfo.module.scss";
import { IoIosCloseCircle } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { RiRainbowLine, RiPlantFill } from "react-icons/ri";
import { BiBed } from "react-icons/bi";
import { FaHandSpock, FaSmoking, FaShower } from "react-icons/fa";
import { GiCat, GiPartyPopper, GiCook } from "react-icons/gi";
import { BsWifi, BsSnow, BsCash } from "react-icons/bs";
import PhotoGallery from "../PhotoGallery";

import { likeDislike, peoplelikeDislike } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const LikesCardInfo = ({ data, showInfo, setShowInfo, isRoom }) => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.loading);
  const loggedUser = useSelector((store) => store.user);

  const currentItemDetails = isRoom ? data.friendlyWith : data.iam;
  const currentItem = data;

  const likeFunc = () => {
    dispatch(
      isRoom
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
      <legend>
        <strong>{isRoom ? "Friendly for" : "I'am"}</strong>
      </legend>
      <section>
        <div className={styles.flexColumn}>
          <div className={styles.char}>
            <span
              className={
                parseInt(currentItemDetails.lgbtq) ? styles.active : ""
              }
            >
              <RiRainbowLine />
            </span>
            LGBTQ+
          </div>
          <div className={styles.char}>
            <span
              className={
                parseInt(currentItemDetails.pet_owner) ? styles.active : ""
              }
            >
              <GiCat />
            </span>
            Pet Owner
          </div>
          <div className={styles.char}>
            <span
              className={
                parseInt(currentItemDetails.multicultural) ? styles.active : ""
              }
            >
              <FaHandSpock />
            </span>
            Multicultural
          </div>
        </div>
        <div className={styles.flexColumn}>
          <div className={styles.char}>
            <span
              className={parseInt(currentItemDetails.veg) ? styles.active : ""}
            >
              <RiPlantFill />
            </span>
            Veg
          </div>
          <div className={styles.char}>
            <span
              className={
                parseInt(currentItemDetails.smooker) ? styles.active : ""
              }
            >
              <FaSmoking />
            </span>
            Smoker
          </div>
          <div className={styles.char}>
            <span
              className={
                parseInt(currentItemDetails.party_lover) ? styles.active : ""
              }
            >
              <GiPartyPopper />
            </span>
            Party Lover
          </div>
        </div>
      </section>
    </fieldset>
  );

  const aboutTheFlat = () => (
    <>
      <fieldset className={styles.fieldset}>
        <legend>
          <strong>About the flat</strong>
        </legend>
        {/* Number of roommates in flat */}
        <p className={styles.roommatesTitle}>
          Roommates:
          <span>
            <AiOutlineMan />
            {currentItem.roommates.males}
          </span>
          <span>
            <AiOutlineWoman />
            {currentItem.roommates.females}
          </span>
          <span>
            <RiRainbowLine />
            {currentItem.roommates.others}
          </span>
        </p>
        <section>
          {/* Number of rooms */}
          <div className={styles.flexColumn}>
            <div className={styles.char}>
              <span
                className={currentItem.aboutFlat.bedrooms ? styles.active : ""}
              >
                <BiBed className={styles.icon} />
              </span>
              {currentItem.aboutFlat.bedrooms} Bedrooms
            </div>
            <div className={styles.char}>
              <span
                className={currentItem.aboutFlat.bathrooms ? styles.active : ""}
              >
                <FaShower className={styles.icon} />
              </span>
              {currentItem.aboutFlat.bathrooms} Bathrooms
            </div>
            <div className={styles.char}>
              <span
                className={currentItem.aboutFlat.kitchen ? styles.active : ""}
              >
                <GiCook className={styles.icon} />
              </span>
              {currentItem.aboutFlat.kitchen} Kitchen
            </div>
          </div>
          {/* Comforts */}
          <div className={styles.flexColumn}>
            <div className={styles.char}>
              <span
                className={currentItem.aboutFlat.airCond ? styles.active : ""}
              >
                <BsSnow />
              </span>
              Air Conditioning
            </div>
            <div className={styles.char}>
              <span
                className={currentItem.aboutFlat.billsInc ? styles.active : ""}
              >
                <BsCash />
              </span>
              Bills included
            </div>
            <div className={styles.char}>
              <span className={currentItem.aboutFlat.wifi ? styles.active : ""}>
                <BsWifi />
              </span>
              Wi-Fi
            </div>
          </div>
        </section>
      </fieldset>
    </>
  );

  const photoGallery = () => (
    <section className={styles.gallery}>
      <p>Gallery</p>
      <PhotoGallery
        photos={isRoom ? [currentItem.roomPhoto] : [currentItem.photo]}
      />
    </section>
  );

  const roomDetails = () => (
    <>
      <div className={styles.flexHeaderInfo}>
        <div className={styles.headerInfo}>
          <h3>{data.roomType} Room</h3>
          <div className={styles.subHeader}>
            <p>in {data.roomAddress}</p>
            <p>
              {data.town} ({data.city})
            </p>
          </div>
          <h4>Price: {data.rentPrice},00€/month</h4>
        </div>

        <div className={styles.likeBtn}>
          <FiHeart
            onClick={() => !loading && likeFunc() && setShowInfo(!showInfo)}
            className={`${styles.outlineHeart} ${styles.icon}`}
          />
        </div>
      </div>
      {genericDetails()}
      {aboutTheFlat()}
      {photoGallery()}
    </>
  );

  const userDetails = () => (
    <>
      <div className={styles.flexHeaderInfo}>
        <div className={styles.headerInfo}>
          <h3>
            {data.name} {data.surname} {data.age ? data.age : null}
          </h3>
          <div className={styles.subHeader}>
            <p>
              from {data.town} ({data.city})
            </p>
          </div>
        </div>

        <div className={styles.likeBtn}>
          <FiHeart
            onClick={() => !loading && likeFunc() && setShowInfo(!showInfo)}
            className={`${styles.outlineHeart} ${styles.icon}`}
          />
        </div>
      </div>
      {genericDetails()}
      {photoGallery()}
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
