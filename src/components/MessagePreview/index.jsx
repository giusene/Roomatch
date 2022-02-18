import styles from "./MessagePreview.module.scss";
import { FaHeart } from "react-icons/fa";
import { BsChatRightDots } from "react-icons/bs";

const MessagePreview = () => {
  return (
    <div className={styles.main}>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')`,
        }}
      >
        <div className={styles.likes}>
          <FaHeart />
        </div>
      </div>
      <div className={styles.text}>
        <p className={styles.nameSurname}>Name Surname</p>
        <p className={styles.details}>Anteprima messaggio o dettagli user</p>
      </div>
      <BsChatRightDots className={styles.icon} />
    </div>
  );
};
export default MessagePreview;
