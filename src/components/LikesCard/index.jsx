import styles from "./LikesCard.module.scss";
import { useState } from "react";
import LikesCardInfo from "./../LikesCardInfo";

const LikesCard = ({ user, isRoom }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div
        className={styles.cardContainer}
        style={{ backgroundImage: `url(${user.photo})` }}
        onClick={() => setShowInfo(!showInfo)}
      >
        <div className={styles.info}>
          {isRoom
            ?
            <>
              <p className={styles.name}>
                {user.roomType} Room
              </p>
              <p className={styles.name}>
                in {user.roomAddress}
              </p>
            </>
            :
            <p className={styles.name}>
              {user.name} {user.surname}
            </p>
          }
          <p className={styles.city}>
            {user.town} ({user.city})
          </p>
        </div>
      </div>
      {showInfo && (
        <LikesCardInfo
          user={user}
          showInfo={showInfo}
          setShowInfo={setShowInfo}
          isRoom={isRoom}
        />
      )}
    </>
  );
};

export default LikesCard;
