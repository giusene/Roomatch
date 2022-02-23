import { useSelector } from "react-redux";
import MatchesProfiles from "../../components/MatchesProfiles";
import MessagePreview from "../../components/MessagePreview";
import styles from "./Matches.module.scss";

const Matches = () => {
  const user = useSelector(state => state.user);
  let messageList = [];

  if (Object.keys(user.messages).length > 0) {
    Object.keys(user.messages).map(
      message => (messageList = [...messageList, user.messages[message]])
    );

    messageList.sort((a, b) => {
      return (
        new Date(b.discussion[b.discussion.length - 1].date) -
        new Date(a.discussion[a.discussion.length - 1].date)
      );
    });
  }

  return (
    <>
      <div className={styles.main}>
        <h3 className={styles.title}>Matchs</h3>
        <MatchesProfiles />
        <div className={styles.separator}></div>
        <div className={styles.messPrev}>
          <h3 className={styles.text}>Messages</h3>
          {Object.keys(user.messages).length > 0 ? (
            <>
              {messageList.map((message, index) => (
                <MessagePreview message={message} key={index} />
              ))}
            </>
          ) : (
            <p className={styles.noitem}>no message available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Matches;
