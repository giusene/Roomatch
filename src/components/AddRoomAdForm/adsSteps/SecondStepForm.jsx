import styles from "./SecondStepForm.module.scss";
import { BsArrowRightCircleFill, BsArrowLeftCircle } from "react-icons/bs";

const SecondStepForm = ({
  nextStep,
  handleFormData,
  prevStep,
  values,
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
          <div className={styles.gender}>
            <label htmlFor="gender">Gender*</label>
            <select
              onChange={handleFormData("gender")}
              name="gender"
              id="gender"
              value={values.gender}
              placeholder="Gender"
              required
            >
              <option value="Male">Male</option>
              <option value="Famale">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <fieldset className={styles.fieldset}>
            <legend>Friendly for</legend>
            <section>
              <div className={styles.flexColumn}>
                <div>
                  <label className={styles.labelContainer} htmlFor="lgbtq">
                    LGBTQ+
                    <input
                      type="checkbox"
                      name="action"
                      id="lgbtq"
                      checked={values.friendlyfor.lgbtq === 1 ? true : false}
                      onChange={(e) => handleInputPref("lgbtq", e)}
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>

                <div>
                  <label className={styles.labelContainer} htmlFor="pet_owner">
                    Pet owner
                    <input
                      checked={
                        values.friendlyfor.pet_owner === 1 ? true : false
                      }
                      onChange={(e) => handleInputPref("pet_owner", e)}
                      type="checkbox"
                      name="action"
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
                      checked={
                        values.friendlyfor.multicultural === 1 ? true : false
                      }
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
                      checked={values.friendlyfor.veg === 1 ? true : false}
                      type="checkbox"
                      onChange={(e) => handleInputPref("veg", e)}
                      name="action"
                      id="veg"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>

                <div>
                  <label className={styles.labelContainer} htmlFor="smooker">
                    Smooker
                    <input
                      checked={values.friendlyfor.smooker === 1 ? true : false}
                      onChange={(e) => handleInputPref("smooker", e)}
                      type="checkbox"
                      name="action"
                      id="smooker"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>

                <div>
                  <label className={styles.labelContainer} htmlFor="party">
                    Party lover
                    <input
                      checked={values.friendlyfor.party === 1 ? true : false}
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
export default SecondStepForm;
