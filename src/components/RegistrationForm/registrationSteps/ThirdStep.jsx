import { httpPOST } from "../../../libs/http";
import styles from "./ThirdStep.module.scss";
import { BsArrowLeftCircle } from "react-icons/bs";

const ThirdStep = ({ values, prevStep }) => {
  const { name, surname, age, city, gender, town, photo } = values;

  const hadleConfirm = (data) => {
    httpPOST("/users", data).then((data) => console.log(data));
  };

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


      <fieldset>
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
                  <label className={styles.labelContainer} htmlFor="pets">
                    Pet owner
                    <input
                      readOnly
                      type="checkbox"
                      name="action"
                      id="pets"
                      checked={values.iam.pets === 1 ? true : false}
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
                  <label className={styles.labelContainer} htmlFor="musician">
                    Musician
                    <input
                      readOnly
                      type="checkbox"
                      name="action"
                      id="musician"
                      checked={values.iam.musician === 1 ? true : false}
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



      <div className={styles.btnSet}>
        <button className={styles.prevStep} onClick={prevStep}>
          <BsArrowLeftCircle />
        </button>
        <button
          className={styles.nextStep}
          onClick={() => hadleConfirm(values)}
        >
          Go!
        </button>
      </div>
    </>
  );
};

export default ThirdStep;
