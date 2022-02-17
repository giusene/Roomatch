import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeChar } from "../../store/actions";
import styles from "./Profile.module.scss";
import { RiRainbowLine, RiPlantFill } from "react-icons/ri";
import { GiCat, GiPartyPopper } from "react-icons/gi";
import { FaHandSpock, FaSmoking } from "react-icons/fa";
import RoomAd from "../../components/RoomAd";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading);

  const handleChar = (char) => {
    dispatch(
      changeChar(
        [
          {
            propName: "iam",
            value: {
              ...user.iam,
              [char]: user.iam[char] === 0 ? 1 : 0,
            },
          },
        ],
        user._id
      )
    );
  };

  return (
    <div className={styles.main}>
      <div className={styles.info}>
        {console.log(user)}
        <h3>
          {user.name} {user.surname}
        </h3>
        <p>Age {user.age}</p>
        <p>{user.gender}</p>
        <p>
          {user.town} ({user.city})
        </p>
      </div>
      <div
        className={styles.header}
        style={{ backgroundImage: `url(${user.photo})` }}
      ></div>
      <div className={styles.charsetContainer}>
        <p className={styles.charTitle}>Friendly for</p>
        <div className={styles.charSet}>
          <div
            onClick={() => !loading && handleChar("lgbtq")}
            className={styles.char}
          >
            <span className={user.iam.lgbtq === 1 ? styles.active : ""}>
              <RiRainbowLine />
            </span>
            LGBTQ+
          </div>
          <div
            onClick={() => !loading && handleChar("pet_owner")}
            className={styles.char}
          >
            <span className={user.iam.pet_owner === 1 ? styles.active : ""}>
              <GiCat />
            </span>
            Pet Owner
          </div>
          <div
            onClick={() => !loading && handleChar("multicultural")}
            className={styles.char}
          >
            <span className={user.iam.multicultural === 1 ? styles.active : ""}>
              <FaHandSpock />
            </span>
            Multicultural
          </div>
          <div
            onClick={() => !loading && handleChar("veg")}
            className={styles.char}
          >
            <span className={user.iam.veg === 1 ? styles.active : ""}>
              <RiPlantFill />
            </span>
            Veg
          </div>
          <div
            onClick={() => !loading && handleChar("smooker")}
            className={styles.char}
          >
            <span className={user.iam.smooker === 1 ? styles.active : ""}>
              <FaSmoking />
            </span>
            Smoker
          </div>
          <div
            onClick={() => !loading && handleChar("party_lover")}
            className={styles.char}
          >
            <span className={user.iam.party_lover === 1 ? styles.active : ""}>
              <GiPartyPopper />
            </span>
            Party Lover
          </div>
        </div>
      </div>
      <div className={styles.bottomContent}>
        {user.roomId.roomId ? (
          <RoomAd room={user.roomId} />
        ) : (
          <Link to="/addroom">
            <button>Find roommate</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Profile;
