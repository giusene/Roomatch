import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { httpGET } from "../../libs/http";
import styles from "./RoomDetails.module.scss";
import { RiRainbowLine, RiPlantFill } from "react-icons/ri";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { GiCat, GiPartyPopper } from "react-icons/gi";
import { FaHandSpock, FaSmoking } from "react-icons/fa";
import LikesCard from "../../components/LikesCard";
import PhotoGallery from "../../components/PhotoGallery";


const RoomDetails = () => {
  const user = useSelector((state) => state.user);

  const [roomLikes, setRoomLikes] = useState([]);
  const [roomDetails, setRoomDetails] = useState({
    roommates: {
      females: 0,
      males: 0,
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
    httpGET(`/rooms/${user.roomId.roomId}`).then((data) => {
      setRoomDetails(data);
    });

    httpGET(`/rooms/${user.roomId.roomId}/getlikes`).then((data) => {
      setRoomLikes(data);
    });
  }, [user.roomId.roomId]);


  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <h3>{roomDetails.roomType}</h3>
        <p>{roomDetails.town} ({roomDetails.city})</p>
        <p>{roomDetails.roomAddress}</p>
      </div>
      <div
        className={styles.header}
        style={{ backgroundImage: `url(${roomDetails.roomPhotos[0]})` }}
      ></div>
      <p className={styles.roommatesTitle}>Roommates: 
      <span><AiOutlineMan />{roomDetails.roommates.males}</span>
      <span><AiOutlineWoman />{roomDetails.roommates.females}</span>
      <span><RiRainbowLine />{roomDetails.roommates.others}</span>  
      </p>
      
  
      <p className={styles.charTitle}>Friendly With</p>
      <div className={styles.charSet}>
        <div className={styles.char}>
          <span className={roomDetails.friendlyWith.lgbtq === 1 ? styles.active : ""}>
            <RiRainbowLine />
          </span>
          LGBTQ+
        </div>
        <div className={styles.char}>
          <span className={roomDetails.friendlyWith.pet_owner === 1 ? styles.active : ""}>
            <GiCat />
          </span>
          Pet Owner
        </div>
        <div className={styles.char}>
          <span className={roomDetails.friendlyWith.multicultural === 1 ? styles.active : ""}>
            <FaHandSpock />
          </span>
          Multicultural
        </div>
        <div className={styles.char}>
          <span className={roomDetails.friendlyWith.veg === 1 ? styles.active : ""}>
            <RiPlantFill />
          </span>
          Veg
        </div>
        <div className={styles.char}>
          <span className={roomDetails.friendlyWith.smooker === 1 ? styles.active : ""}>
            <FaSmoking />
          </span>
          Smoker
        </div>
        <div className={styles.char}>
          <span className={roomDetails.friendlyWith.party_lover === 1 ? styles.active : ""}>
            <GiPartyPopper />
          </span>
          Party Lover
        </div>
      </div>
      <div className={styles.gallery}>
        <p className={styles.charTitle}>Gallery</p>
        <PhotoGallery photos={roomDetails.roomPhotos}/>
      </div>
      <div className={styles.likes}>
        <p className={styles.charTitle}>Likes</p>
        {roomLikes.map((user, index) => (
          <LikesCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default RoomDetails;
