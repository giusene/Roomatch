import { useState, useEffect } from "react";
import { httpGET } from "../../libs/http";
import styles from "./UserDetails.module.scss";
import { RiRainbowLine, RiPlantFill } from "react-icons/ri";
import { GiCat, GiPartyPopper } from "react-icons/gi";
import { FaHandSpock, FaSmoking } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const UserDetails = () => {
  const userInfo = useLocation();
  const [userDetails, setUserDetails] = useState({
    name: "",
    surname: "",
    email: "",
    gender: "",
    age: 18,
    iam: {
      lgbtq: 0,
      multicultural: 0,
      pet_owner: 0,
      veg: 0,
      party_lover: 0,
      smooker: 0,
    },
    city: "",
    town: "",
    photo: "",
  });

  useEffect(() => {
    httpGET(`/users/${userInfo.state}`).then(data => {
      setUserDetails(data);
    });
  }, [userInfo.state]);

  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <h3>
          {userDetails.name} {userDetails.surname}
        </h3>
        <p>{userDetails.gender}</p>
        <p>Age {userDetails.age}</p>
        <p>
          {userDetails.town} ({userDetails.city})
        </p>
      </div>
      <div
        className={styles.header}
        style={{ backgroundImage: `url(${userDetails.photo})` }}
      ></div>
      <div>
        <div className={styles.charsetContainer}>
          <p className={styles.charTitle}>Friendly for</p>
          <div className={styles.charSet}>
            <div className={styles.char}>
              <span
                className={
                  parseInt(userDetails.iam.lgbtq) === 1 ? styles.active : ""
                }
              >
                <RiRainbowLine />
              </span>
              LGBTQ+
            </div>
            <div className={styles.char}>
              <span
                className={
                  parseInt(userDetails.iam.pet_owner) === 1 ? styles.active : ""
                }
              >
                <GiCat />
              </span>
              Pet Owner
            </div>
            <div className={styles.char}>
              <span
                className={
                  parseInt(userDetails.iam.multicultural) === 1
                    ? styles.active
                    : ""
                }
              >
                <FaHandSpock />
              </span>
              Multicultural
            </div>
            <div className={styles.char}>
              <span
                className={
                  parseInt(userDetails.iam.veg) === 1 ? styles.active : ""
                }
              >
                <RiPlantFill />
              </span>
              Veg
            </div>
            <div className={styles.char}>
              <span
                className={
                  parseInt(userDetails.iam.smooker) === 1 ? styles.active : ""
                }
              >
                <FaSmoking />
              </span>
              Smoker
            </div>
            <div className={styles.char}>
              <span
                className={
                  parseInt(userDetails.iam.party_lover) === 1
                    ? styles.active
                    : ""
                }
              >
                <GiPartyPopper />
              </span>
              Party Lover
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
