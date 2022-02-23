import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { httpGET } from "../../libs/http";
import styles from "./ChatHeader.module.scss";

const ChatHeader = ({ roomInfo, interlocutor }) => {
  const user = useSelector(state => state.user);
  const [friend, setFriend] = useState({});

  useEffect(() => {
    interlocutor
      ? httpGET(`/users/${interlocutor}`).then(data => setFriend(data))
      : httpGET(`/users/${roomInfo.roomOwner}`).then(data => setFriend(data));
  }, [interlocutor, roomInfo.roomOwner]);

  return (
    <div className={styles.main}>
      <p>
        <span>
          <Link to="/userdetails" state={user._id}>
            {user.name} {user.surname}
          </Link>
        </span>{" "}
        ▸{" "}
        <span>
          <Link to="/userdetails" state={friend._id}>
            {friend.name} {friend.surname}
          </Link>
        </span>{" "}
        for:
      </p>
      <Link to="/roomdetails" state={roomInfo.roomId}>
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
                <div className={styles.price}>
                  {user.roomId.rentPrice},00€/month
                </div>
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
                <div className={styles.price}>
                  {roomInfo.rentPrice},00€/month
                </div>
              </div>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ChatHeader;
