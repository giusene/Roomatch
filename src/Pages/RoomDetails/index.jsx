import { useState, useEffect } from "react";
import { httpGET } from "../../libs/http";
import styles from "./RoomDetails.module.scss";
import { RiRainbowLine, RiPlantFill } from "react-icons/ri";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { GiCat, GiPartyPopper } from "react-icons/gi";
import { BsWifi, BsSnow, BsCash } from "react-icons/bs";
import { FaHandSpock, FaSmoking } from "react-icons/fa";
import PhotoGallery from "../../components/PhotoGallery";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteRoom } from "../../store/actions";
import { Link, useNavigate } from "react-router-dom";

const RoomDetails = () => {
  const user = useSelector(state => state.user);
  const roomInfo = useLocation();
  const dispatch = useDispatch();
  let url = useNavigate();

  const removeRoom = () => {
    dispatch(deleteRoom(roomInfo.state));
    url("/profile");
  };

  const [roomDetails, setRoomDetails] = useState({
    roommates: {
      females: 0,
      males: 0,
    },
    aboutFlat: {
      airCond: true,
      bathrooms: 0,
      bedrooms: "",
      billsIncl: true,
      kitchen: "",
      wifi: true,
    },
    friendlyWith: {
      lgbtq: 0,
      multicultural: 0,
      pet_owner: 0,
      veg: 0,
      party_lover: 0,
      smooker: 0,
    },
    _id: "",
    roomOwner: "",
    roomType: "",
    roomAddress: "",
    city: "",
    town: "",
    roomPhotos: [],
    ilike: [],
    wholikesme: [],
    matches: [],
  });

  useEffect(() => {
    httpGET(`/rooms/${roomInfo.state}`).then(data => {
      setRoomDetails(data);
    });
  }, [roomInfo.state]);

  return (
    <div className={styles.main}>
      {user.roomId.roomId === roomInfo.state && (
        <div className={styles.btnSet}>
          <Link state={roomDetails} to={"/editroom"}>
            Edit Room
          </Link>
          <div onClick={() => removeRoom()}>Remove Room</div>
        </div>
      )}
      <div className={styles.info}>
        <h3>{roomDetails.roomType}</h3>
        <p>
          {roomDetails.town} ({roomDetails.city})
        </p>
        <p>{roomDetails.roomAddress}</p>
      </div>
      <div
        className={styles.header}
        style={{ backgroundImage: `url(${roomDetails.roomPhotos[0]})` }}
      ></div>
      <p className={styles.roommatesTitle}>
        Roommates:
        <span>
          <AiOutlineMan />
          {roomDetails.roommates.males}
        </span>
        <span>
          <AiOutlineWoman />
          {roomDetails.roommates.females}
        </span>
        <span>
          <RiRainbowLine />
          {roomDetails.roommates.others}
        </span>
      </p>
      <div className={styles.boxContainer}>
        <div className={styles.charsetContainer}>
          <p className={styles.charTitle}>Friendly for</p>
          <div className={styles.charSet}>
            <div className={styles.char}>
              <span
                className={
                  roomDetails.friendlyWith.lgbtq === "1" ? styles.active : ""
                }
              >
                <RiRainbowLine />
              </span>
              LGBTQ+
            </div>
            <div className={styles.char}>
              <span
                className={
                  roomDetails.friendlyWith.pet_owner === "1"
                    ? styles.active
                    : ""
                }
              >
                <GiCat />
              </span>
              Pet Owner
            </div>
            <div className={styles.char}>
              <span
                className={
                  roomDetails.friendlyWith.multicultural === "1"
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
                  roomDetails.friendlyWith.veg === "1" ? styles.active : ""
                }
              >
                <RiPlantFill />
              </span>
              Veg
            </div>
            <div className={styles.char}>
              <span
                className={
                  roomDetails.friendlyWith.smooker === "1" ? styles.active : ""
                }
              >
                <FaSmoking />
              </span>
              Smoker
            </div>
            <div className={styles.char}>
              <span
                className={
                  roomDetails.friendlyWith.party_lover === "1"
                    ? styles.active
                    : ""
                }
              >
                <GiPartyPopper />
              </span>
              Party Lover
            </div>
          </div>
        </div>

        <div className={styles.charsetContainer}>
          <p className={styles.charTitle}>About Flat</p>
          <div className={styles.charSet}>
            <div className={styles.char}>
              <p className={styles.charNum}>
                {roomDetails.aboutFlat.bathrooms}
              </p>
              Bathrooms
            </div>
            <div className={styles.char}>
              <span
                className={
                  roomDetails.aboutFlat.airCond === true ? styles.active : ""
                }
              >
                <BsSnow />
              </span>
              Air Conditioning
            </div>
            <div className={styles.char}>
              <p className={styles.charNum}>{roomDetails.aboutFlat.bedrooms}</p>
              Bedrooms
            </div>
            <div className={styles.char}>
              <span
                className={
                  roomDetails.aboutFlat.billsIncl === true ? styles.active : ""
                }
              >
                <BsCash />
              </span>
              Bills included
            </div>
            <div className={styles.char}>
              <p className={styles.charNum}>{roomDetails.aboutFlat.bedrooms}</p>
              Kitchen
            </div>
            <div className={styles.char}>
              <span
                className={
                  roomDetails.aboutFlat.wifi === true ? styles.active : ""
                }
              >
                <BsWifi />
              </span>
              Wi-Fi
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gallery}>
        <p>Gallery</p>
        <PhotoGallery photos={roomDetails.roomPhotos} />
      </div>
    </div>
  );
};

export default RoomDetails;
