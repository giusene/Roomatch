import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatDistance } from "date-fns";
import { it } from "date-fns/locale";
import { BsChatRightDots } from "react-icons/bs";
import styles from "./MessagePreview.module.scss";

const MessagePreview = ({ message }) => {
  const user = useSelector(state => state.user);

  return (
    <Link
      to="/messages"
      state={{
        ...message.user.room,
        roomOwner: message.user.id,
        roomPhoto: message.user.room.roomPhotos,
      }}
    >
      {console.log(message.user)}
      <div className={styles.main}>
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${message.user.photo})`,
          }}
        >
          {message.user.room.roomId && (
            <div
              className={styles.room}
              style={{
                backgroundImage: `url(${message.user.room.photo})`,
              }}
            ></div>
          )}
        </div>
        <div className={styles.text}>
          <p className={styles.nameSurname}>
            {message.user.name} {message.user.surname}
          </p>
          <p className={styles.date}>
            {formatDistance(
              new Date(message.discussion[message.discussion.length - 1].date),
              new Date(),
              { addSuffix: true, locale: it }
            )}
          </p>
          <p className={styles.details}>
            {!message.discussion[message.discussion.length - 1].read && (
              <span></span>
            )}
            {message.discussion[message.discussion.length - 1].author ===
            user._id ? (
              <p className={styles.author}>Tu: </p>
            ) : (
              <p className={styles.author}>{message.user.name}: </p>
            )}
            {message.discussion[message.discussion.length - 1].text}
          </p>
        </div>
        <div className={styles.icon}>
          <BsChatRightDots />
        </div>
      </div>
    </Link>
  );
};
export default MessagePreview;
