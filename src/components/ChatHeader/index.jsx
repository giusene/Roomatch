import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { httpGET } from "../../libs/http";
import styles from "./ChatHeader.module.scss";
import { Link } from 'react-router-dom'

const ChatHeader = ({ roomInfo, interlocutor }) => {
  const user = useSelector(state => state.user);
  const [friend, setFriend] = useState({})

  useEffect(() => {
    httpGET(`/users/${interlocutor}`).then(data => setFriend(data));
  }, [interlocutor]);

  return (
    <div className={styles.main}>
    <p><span>{user.name} {user.surname}</span> {'>'} <span>{friend.name} {friend.surname}</span> for:</p>
    <Link to='/roomdetails' state={roomInfo.roomId}>
      <div className={styles.roomInfo}>
        {user.roomId.roomId ? (
          <>
            <div
              className={styles.img}
              style={{
                backgroundImage: `url(${user.roomId.roomPhotos})`,
              }}
            ></div>
            <div className={styles.info}>
              <div className={styles.type}>{user.roomId.roomType}</div>
              <div className={styles.address}>
                {user.roomId.roomAddress} - {user.roomId.town} (
                {user.roomId.city})
              </div>
              <div className={styles.price}>{user.roomId.rentPrice}</div>
            </div>
          </>
        ) : (
          <>
            <div
              className={styles.img}
              style={{
                backgroundImage: `url(${roomInfo.roomPhoto})`,
              }}
            ></div>
            <div className={styles.info}>
              <div className={styles.type}>{roomInfo.roomType}</div>
              <div className={styles.address}>
                {roomInfo.roomAddress} - {roomInfo.town} ({roomInfo.city})
              </div>
              <div className={styles.price}>{roomInfo.rentPrice}</div>
            </div>
          </>
        )}
      </div>
      </Link>
    </div>
  );
};

export default ChatHeader;
