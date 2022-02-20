import styles from "./LikesCard.module.scss";
import { useState } from "react";
import LikesCardInfo from "./../LikesCardInfo";

const LikesCard = ({ data, isRoom }) => {
  const [showInfo, setShowInfo] = useState(false);
  console.log("LIKES CARD - data = ", data)

  const roomDataCard = () => (
    <>
      <p className={styles.name}>
        {data.roomType} Room
      </p>
      <p className={styles.name}>
        in {data.roomAddress}
      </p>
      <p className={styles.city}>
        {data.town} ({data.city})
      </p>
    </>
  );

  const userDataCard = () => (
    <>
      <p className={styles.name}>
        {data.name} {data.surname}
      </p>
      <p className={styles.city}>
        {data.town} ({data.city})
      </p>
    </>
  );

  return (
    <>
      {showInfo && (
        <LikesCardInfo
          data={data}
          showInfo={showInfo}
          setShowInfo={setShowInfo}
          isRoom={isRoom}
        />
      )}
      <div
        className={styles.cardContainer}
        style={{ backgroundImage: `url(${data.photo})` }}
        onClick={() => setShowInfo(!showInfo)}
      >
        <div className={styles.info}>
          {isRoom
            ? roomDataCard()
            : userDataCard()
          }
        </div>
      </div>
    </>
  );
};

export default LikesCard;
