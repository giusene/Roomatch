import LikesCard from "../../components/LikesCard";
import styles from "./Likes.module.scss";
import { wholikesme } from "./users.js";

const Likes = () => {
  return (
    <div className={styles.main}>
      <h3>Your likes</h3>
      <div className={styles.cardContainer}>
        {wholikesme.map((user) => (
          <LikesCard user={user} />
        ))}
      </div>
    </div>
  );
};

export default Likes;
