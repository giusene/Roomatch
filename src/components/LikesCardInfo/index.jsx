import styles from "./LikesCardInfo.module.scss";
import { IoIosCloseCircle } from "react-icons/io";
import { FiHeart } from "react-icons/fi";

const LikesCardInfo = ({ user, showInfo, setShowInfo, isRoom }) => {
  const dataDetails = isRoom ? user.friendlyWith : user.iam;

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
            <div className={styles.subHeader}>
              {console.log(user)}
              {!isRoom && <p>Age: {user.age}</p>}
              <p>
                {user.town} ({user.city})
              </p>
            </div>
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
                    checked={dataDetails.lgbtq === 1 ? true : false}
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
                    checked={dataDetails.pet_owner === 1 ? true : false}
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
                    checked={dataDetails.multicultural === 1 ? true : false}
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
                    checked={dataDetails.veg === 1 ? true : false}
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
                    checked={dataDetails.smooker === 1 ? true : false}
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
                    checked={dataDetails.party_lover === 1 ? true : false}
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
