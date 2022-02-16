// import { useSelector, useDispatch } from "react-redux";
// import { likeDislike } from "../../store/actions";

import styles from "./LikesCardInfo.module.scss";
import { IoIosCloseCircle } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

const LikesCardInfo = ({ user, showInfo, setShowInfo }) => {
  return (
    <div className={styles.background}>
      <div className={styles.closeBtn} to="/">
        <IoIosCloseCircle onClick={() => setShowInfo(!showInfo)} />
      </div>
      <div className={styles.modalInfo}>
        <div className={styles.flexHeaderInfo}>
          <div className={styles.headerInfo}>
            <h3>
              {user.name} {user.surname}
            </h3>
            {console.log(user)}
            <p>Age: {user.age}</p>
            <p>
              {user.town} ({user.city})
            </p>
          </div>
          <div className={styles.likeBtn}>
            <FiHeart className={styles.icon} />
          </div>
        </div>

        <fieldset className={styles.fieldset}>
          <legend>Friendly for</legend>
          <section>
            <div className={styles.flexColumn}>
              <div>
                <label className={styles.labelContainer} htmlFor="lgbtq">
                  LGBTQ+
                  <input
                    readOnly
                    type="checkbox"
                    name="action"
                    id="lgbtq"
                    checked={user.iam.lgbtq === 1 ? true : false}
                  />
                  <span className={styles.mark}></span>
                </label>
              </div>

              <div>
                <label className={styles.labelContainer} htmlFor="pet_owner">
                  Pet owner
                  <input
                    readOnly
                    type="checkbox"
                    name="action"
                    checked={user.iam.pet_owner === 1 ? true : false}
                    id="pet_owner"
                  />
                  <span className={styles.mark}></span>
                </label>
              </div>
              <div>
                <label
                  className={styles.labelContainer}
                  htmlFor="multicultural"
                >
                  Multicultural
                  <input
                    readOnly
                    type="checkbox"
                    name="action"
                    id="multicultural"
                    checked={user.iam.multicultural === 1 ? true : false}
                  />
                  <span className={styles.mark}></span>
                </label>
              </div>
            </div>

            <div className={styles.flexColumn}>
              <div>
                <label className={styles.labelContainer} htmlFor="veg">
                  Veg
                  <input
                    readOnly
                    type="checkbox"
                    name="action"
                    id="veg"
                    checked={user.iam.veg === 1 ? true : false}
                  />
                  <span className={styles.mark}></span>
                </label>
              </div>

              <div>
                <label className={styles.labelContainer} htmlFor="smooker">
                  Smoker
                  <input
                    readOnly
                    type="checkbox"
                    name="action"
                    id="smooker"
                    checked={user.iam.smooker === 1 ? true : false}
                  />
                  <span className={styles.mark}></span>
                </label>
              </div>

              <div>
                <label className={styles.labelContainer} htmlFor="party">
                  Party lover
                  <input
                    readOnly
                    type="checkbox"
                    name="action"
                    id="party"
                    checked={user.iam.party_lover === 1 ? true : false}
                  />
                  <span className={styles.mark}></span>
                </label>
              </div>
            </div>
          </section>
        </fieldset>
      </div>
    </div>
  );
};

export default LikesCardInfo;
