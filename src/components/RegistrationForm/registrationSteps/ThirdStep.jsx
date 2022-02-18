import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { httpPOST } from "../../../libs/http";
import styles from "./ThirdStep.module.scss";
import { BsArrowLeftCircle } from "react-icons/bs";

const ThirdStep = ({ values, prevStep }) => {
  const [message, setMessage] = useState("");
  const [redirect, setRedirect] = useState("/registration");
  let url = useNavigate();
  const { name, surname, age, city, gender, town, photo } = values;

  const hadleConfirm = () => {
    httpPOST("/users", values).then((data) => {
      data.message === "email already present in our system"
        ? setMessage(data.message)
        : setRedirect("/");
    });
  };

  useEffect(() => {
    url(redirect);
  }, [url, redirect]);

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
        <div className={styles.info}>
          <h3>
            {name} {surname}
          </h3>
          <p>Gender: {gender}</p>
          <p>Age: {age}</p>
          <p className={styles.infoCity}>
            {town} ({city})
          </p>
        </div>
      </div>

      <fieldset className={styles.fieldset}>
        <legend>I'm</legend>
        <section>
          <div className={styles.flexColumn}>
            <div>
              <label className={styles.labelContainer} htmlFor="lgbtq">
                LGBTQ+
                <input
                  type="checkbox"
                  name="action"
                  id="lgbtq"
                  readOnly
                  checked={values.iam.lgbtq === 1 ? true : false}
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
                  id="pet_owner"
                  checked={values.iam.pet_owner === 1 ? true : false}
                />
                <span className={styles.mark}></span>
              </label>
            </div>
            <div>
              <label className={styles.labelContainer} htmlFor="multicultural">
                Multicultural
                <input
                  readOnly
                  type="checkbox"
                  name="action"
                  id="multicultural"
                  checked={values.iam.multicultural === 1 ? true : false}
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
                  checked={values.iam.veg === 1 ? true : false}
                />
                <span className={styles.mark}></span>
              </label>
            </div>

            <div>
              <label className={styles.labelContainer} htmlFor="smooker">
                Smooker
                <input
                  readOnly
                  type="checkbox"
                  name="action"
                  id="smooker"
                  checked={values.iam.smooker === 1 ? true : false}
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
                  checked={values.iam.party === 1 ? true : false}
                />
                <span className={styles.mark}></span>
              </label>
            </div>
          </div>
        </section>
      </fieldset>
      {message && <p className={styles.error}>{message}</p>}
      <div className={styles.btnSet}>
        <button className={styles.prevStep} onClick={prevStep}>
          <BsArrowLeftCircle />
        </button>
        <button
          className={styles.nextStep}
          onClick={() => hadleConfirm()}
        >
          Go!
        </button>
      </div>
    </>
  );
};

export default ThirdStep;
