import CitiesSelector from "../../CitiesSelector";
import styles from "./SecondStep.module.scss";
import { BsArrowRightCircleFill, BsArrowLeftCircle } from "react-icons/bs";

const SecondStep = ({
  nextStep,
  handleFormData,
  prevStep,
  values,
  handleInputCities,
  handleInputPref,
}) => {
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className={styles.containerForm}>
      <form onSubmit={(e) => submitFormData(e)}>
        <div>
          <div className={styles.age}>
            <label htmlFor="age">Age*</label>
            <input
              className={styles.styledCheckbox}
              value={values.age}
              onChange={handleFormData("age")}
              name="age"
              id="age"
              type="number"
              placeholder="Your age"
              min="18"
              max="90"
              required
            />
          </div>
          <div className={styles.gender}>
            <label htmlFor="gender">Gender*</label>
            <select
              onChange={handleFormData("gender")}
              name="gender"
              id="gender"
              placeholder="Gender"
              value={values.gender}
              required
            >

              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Other'>Other</option>
            </select>
          </div>

          <div className={styles.city}>
            <label htmlFor="City">City*</label>
            <CitiesSelector handleInputCities={handleInputCities} values={values} />
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
                      checked={values.iam.lqbtq === 1 ? true : false}
                      onChange={(e) => handleInputPref("lgbtq", e)}
                    
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>

                <div>
                  <label className={styles.labelContainer} htmlFor="pets">
                    Pet owner
                    <input
                      checked={values.iam.pets === 1 ? true : false}
                      onChange={(e) => handleInputPref("pets", e)}
                      type="checkbox"
                      name="action"
                      id="pets"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>
                <div>
                  <label className={styles.labelContainer} htmlFor="multicultural">
                    Multicultural
                    <input
                      checked={values.iam.multicultural === 1 ? true : false}
                      onChange={(e) => handleInputPref("multicultural", e)}
                      type="checkbox"
                      name="action"
                      id="multicultural"
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
                      checked={values.iam.veg === 1 ? true : false}
                      type="checkbox"
                      onChange={(e) => handleInputPref("veg", e)}
                      name="action"
                      id="veg"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>

                <div>
                  <label className={styles.labelContainer} htmlFor="musician">
                    Musician
                    <input
                      checked={values.iam.musician === 1 ? true : false}
                      onChange={(e) => handleInputPref("musician", e)}
                      type="checkbox"
                      name="action"
                      id="musician"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>

                <div>
                  <label className={styles.labelContainer} htmlFor="party">
                    Party lover
                    <input
                      checked={values.iam.party === 1 ? true : false}
                      onChange={(e) => handleInputPref("party", e)}
                      type="checkbox"
                      name="action"
                      id="party"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>
              </div>
            </section>
          </fieldset>
        </div>
      </form>
      <button className={styles.prevStep} onClick={prevStep}>
        <BsArrowLeftCircle />
      </button>
      <button className={styles.nextStep} onClick={nextStep}>
        <BsArrowRightCircleFill />
      </button>
    </div>
  );
};

export default SecondStep;
