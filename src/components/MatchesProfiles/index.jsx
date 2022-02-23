import styles from "./MatchesProfiles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeChar } from "../../store/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MatchesProfiles = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    user.newMatch.length > 0 &&
      setTimeout(() => {
        dispatch(
          changeChar(
            [
              {
                propName: "newMatch",
                value: [],
              },
            ],
            user._id
          )
        );
      }, 500);
  }, [dispatch, user._id, user.newMatch.length]);

  return (
    <div className={styles.container}>
      <div className={styles.matchesContainer}>
        {user.roomId.roomId ? (
          user.roomId.matches.length > 0 ? (
            user.roomId.matches.map((userMatch, index) => (
              <div key={index} className={styles.matches}>
                {user.newMatch.filter(item => item === userMatch.id).length >
                  0 && <span>New</span>}
                <Link to="/messages" state={userMatch}>
                  <img
                    className={styles.imgMatch}
                    src={userMatch.photo}
                    alt={userMatch.name}
                  />
                </Link>
              </div>
            ))
          ) : (
            <p>no matches available</p>
          )
        ) : user.matches.length > 0 ? (
          user.matches.map(room => (
            <div key={room.roomId} className={styles.matches}>
              {user.newMatch.filter(item => item === room.roomId).length >
                0 && <span>New</span>}
              <Link to="/messages" state={room}>
                <img
                  className={styles.imgMatch}
                  src={room.roomPhoto}
                  alt={room.roomType}
                />
              </Link>
            </div>
          ))
        ) : (
          <p>no matches available</p>
        )}
      </div>
    </div>
  );
};

export default MatchesProfiles;
