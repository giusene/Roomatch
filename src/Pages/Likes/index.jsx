import LikesCard from "../../components/LikesCard";
import { useSelector } from "react-redux";
import styles from "./Likes.module.scss";
import { useState, useEffect } from "react";
import { httpGET } from "../../libs/http";

const Likes = () => {
  const user = useSelector(state => state.user)

  const [dataRoomLikes, setDataRoomLikes] = useState({ data: [], isRoom: 0 });

  useEffect(() => {
    httpGET(`/users/${user._id}/wholikesmyroom`).then((data) => {
      setDataRoomLikes({ data: data, isRoom: 0 }); // sono persone interessate alla stanza roomId
    })
  }, [user]);

  const dataLikes = user.roomId.roomId !== '' ? dataRoomLikes : { data: user.wholikesme, isRoom: 1 };

  return (
    <div className={styles.main}>
      <div className={styles.cardContainer}>
        {dataLikes.data.map((user, index) => (
          <LikesCard key={index} user={user} isRoom={dataLikes.isRoom} />
        ))}
      </div>
    </div>
  );
};

export default Likes;
