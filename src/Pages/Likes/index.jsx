import LikesCard from "../../components/LikesCard";
import { useSelector } from "react-redux";
import styles from "./Likes.module.scss";

const Likes = () => {
  const user = useSelector(state => state.user)

  return (
    <div className={styles.main}>
      <div className={styles.cardContainer}>
        {user.wholikesme.map((user, index) => (
          <LikesCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Likes;
