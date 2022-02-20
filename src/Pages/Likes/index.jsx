import LikesCard from "../../components/LikesCard";
import { useSelector } from "react-redux";
import styles from "./Likes.module.scss";
import { useState, useEffect } from "react";

const Likes = () => {
  const user = useSelector((state) => state.user);

  const [dataLikes, setDataLikes] = useState({ data: [], isRoom: null });

  useEffect(() => {
    user.roomId.roomId !== ''
      ? setDataLikes({ data: user.roomId.wholikesme, isRoom: 0 })
      : setDataLikes({ data: user.wholikesme, isRoom: 1 });
  }, [user.roomId.roomId, user.roomId.wholikesme, user.wholikesme]);

  console.log(user)
  console.log("dataLikes ", dataLikes)
  return (
    <div className={styles.main}>
      <h3 className={styles.title}>These people like you!</h3>
      <div className={styles.cardContainer}>
        {dataLikes.data.map((currentData, index) => (
          <LikesCard key={index} data={currentData} isRoom={dataLikes.isRoom} />
        ))}
      </div>
    </div>
  );
};

export default Likes;
