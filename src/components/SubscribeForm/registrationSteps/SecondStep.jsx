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
              defaultValue={"DEFAULT"}
              onChange={handleFormData("gender")}
              name="gender"
              id="gender"
              placeholder="Gender"
              required
            >
              <option value="DEFAULT" disabled>
                Gender
              </option>
              <option value={values.genre}>M</option>
              <option value={values.genre}>F</option>
            </select>
          </div>

          <div className={styles.city}>
            <label htmlFor="City">City*</label>
            <CitiesSelector handleInputCities={handleInputCities} />
          </div>

          <fieldset>
            <legend>I'm</legend>
            <section>
              <div className={styles.flexColumn}>
                <div>
                  <label className={styles.container} htmlFor="lgbtq">
                    LGBTQ+
                    <input
                      type="checkbox"
                      name="action"
                      id="lgbtq"
                      value={values.lgbt}
                      onChange={(e) => handleInputPref("lgbtq", e)}
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>

                <div>
                  <label className={styles.container} htmlFor="pets">
                    Pet owner
                    <input
                      value={values.pets}
                      onChange={(e) => handleInputPref("pets", e)}
                      type="checkbox"
                      name="action"
                      id="pets"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>
                <div>
                  <label className={styles.container} htmlFor="multicultural">
                    Multicultural
                    <input
                      value={values.multicultural}
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
                  <label className={styles.container} htmlFor="veg">
                    Veg
                    <input
                      value={values.veg}
                      type="checkbox"
                      onChange={(e) => handleInputPref("veg", e)}
                      name="action"
                      id="veg"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>

                <div>
                  <label className={styles.container} htmlFor="musician">
                    Musician
                    <input
                      value={values.musician}
                      onChange={(e) => handleInputPref("musician", e)}
                      type="checkbox"
                      name="action"
                      id="musician"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>

                <div>
                  <label className={styles.container} htmlFor="party">
                    Party lover
                    <input
                      value={values.party}
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
