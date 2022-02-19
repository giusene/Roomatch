import { useSelector } from "react-redux";
import MatchesProfiles from "../../components/MatchesProfiles";
import MessagePreview from "../../components/MessagePreview";
import styles from "./Matches.module.scss";

const Matches = () => {
  const user = useSelector(state => state.user);

  return (
    <>
      <div className={styles.main}>
        <h3 className={styles.title}>Matchs</h3>
        <MatchesProfiles />
        <div className={styles.messPrev}>
          <h3 className={styles.text}>Messages</h3>
          {Object.keys(user.messages).length > 0 ? (
            <>
              {Object.keys(user.messages)
                .reverse()
                .map((message, index) => (
                  <MessagePreview message={user.messages[message]} key={index} />
                ))}
            </>
          ) : (
            <p>no message available</p>
          )}

          
        </div>
      </div>
    </>
  );
};

export default Matches;
