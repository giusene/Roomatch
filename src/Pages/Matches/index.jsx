import MatchesProfiles from "../../components/MatchesProfiles";
import MessagePreview from "../../components/MessagePreview";
import styles from "./Matches.module.scss";

const Matches = () => {
  return (
    <>
      <div className={styles.main}>
        <h3 className={styles.title}>Matchs</h3>
        <MatchesProfiles />
        <div className={styles.messPrev}>
          <h3 className={styles.text}>Messages</h3>
          <MessagePreview />
          <MessagePreview />
          <MessagePreview />
          <MessagePreview />
        </div>
      </div>
    </>
  );
};

export default Matches;
