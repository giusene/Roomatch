import styles from "./SecondStepForm.module.scss";
import { BsArrowRightCircleFill, BsArrowLeftCircle } from "react-icons/bs";
import { uploadImg } from "../../../libs/http";

const SecondStepForm = ({
  handleRoommates,
  nextStep,
  handleFormData,
  prevStep,
  values,
  handleInputPref,
  setImage,
}) => {
  const submitFormData = e => {
    e.preventDefault();
    nextStep();
  };

  const photoGallery = e => {
    uploadImg(e.target.files[0]).then(result => {
      setImage(result.data.display_url);
    });
  };

  return (
    <div className={styles.containerForm}>
      <form onSubmit={e => submitFormData(e)}>
        <div>
          <div className={styles.roommates}>
            Roomates:
            <div className={styles.roommatesWrapper}>
              <>
                <label className={styles.label} htmlFor="Males">
                  Males:
                </label>
                <input
                  value={values.roommates.males}
                  onChange={e => handleRoommates("males", e)}
                  name="Males"
                  id="Males"
                  type="number"
                  min={1}
                  required
                />
              </>

              <>
                <label className={styles.label} htmlFor="Females">
                  Females:
                </label>
                <input
                  value={values.roommates.females}
                  onChange={e => handleRoommates("females", e)}
                  name="Females"
                  id="Females"
                  type="number"
                  min={1}
                  required
                />
              </>

              <>
                <label className={styles.label} htmlFor="Others">
                  Others:
                </label>
                <input
                  value={values.roommates.others}
                  onChange={e => handleRoommates("others", e)}
                  name="Others"
                  id="Others"
                  type="number"
                  min={1}
                  required
                />
              </>
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
                      type="checkbox"
                      name="action"
                      id="lgbtq"
                      checked={values.friendlyWith.lgbtq === "1" ? true : false}
                      onChange={e => handleInputPref("lgbtq", e)}
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>

                <div>
                  <label className={styles.labelContainer} htmlFor="pet_owner">
                    Pet owner
                    <input
                      checked={
                        values.friendlyWith.pet_owner === "1" ? true : false
                      }
                      onChange={e => handleInputPref("pet_owner", e)}
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
                        values.friendlyWith.multicultural === "1" ? true : false
                      }
                      onChange={e => handleInputPref("multicultural", e)}
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
                      checked={values.friendlyWith.veg === "1" ? true : false}
                      type="checkbox"
                      onChange={e => handleInputPref("veg", e)}
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
                      checked={
                        values.friendlyWith.smooker === "1" ? true : false
                      }
                      onChange={e => handleInputPref("smooker", e)}
                      type="checkbox"
                      name="action"
                      id="smooker"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>

                <div>
                  <label
                    className={styles.labelContainer}
                    htmlFor="party_lover"
                  >
                    Party lover
                    <input
                      checked={
                        values.friendlyWith.party_lover === "1" ? true : false
                      }
                      onChange={e => handleInputPref("party_lover", e)}
                      type="checkbox"
                      name="action"
                      id="party_lover"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>
              </div>
            </section>
          </fieldset>
        </div>
      </form>
      <div className={styles.imagesWrapper}>
        <p className={styles.uploadPics}>Upload min1/max4 pics</p>
        <div className={styles.sliderForm}>
          <div className={styles.formWrapper}>
            <form className={styles.flexForm} onSubmit={e => submitFormData(e)}>
              {values.roomPhotos.map((photo, index) => (
                <img src={photo} key={index} alt="roomatch" />
              ))}
              {values.roomPhotos.length < 4 && (
                <label htmlFor="upload" className={styles.uploadBtn}>
                  +
                </label>
              )}
              <input
                type="file"
                onChange={e => photoGallery(e)}
                accept=".jpg, .jpeg, .png"
                placeholder="carica"
                name="upload"
                id="upload"
                title="Carica"
                className={styles.hidden}
              />
            </form>
          </div>
        </div>
      </div>
      <div className={styles.arrowBtns}>
        <button className={styles.prevStep} onClick={prevStep}>
          <BsArrowLeftCircle className={styles.icon} />
        </button>
        <button
          className={styles.nextStep}
          disabled={values.roomPhotos.length > 0 ? false : true}
          onClick={nextStep}
        >
          <BsArrowRightCircleFill className={styles.icon} />
        </button>
      </div>
    </div>
  );
};
export default SecondStepForm;
