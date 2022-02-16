// import { useState } from "react";
// import CitiesSelector from "../../CitiesSelector";
// import { uploadImg } from "../../../libs/http";
import { BsArrowRightCircleFill } from "react-icons/bs";
import styles from "./FirstStepForm.module.scss";

const FirstStepForm = ({
  handleFormData,
  handleAbout,
  handleAboutCheck,
  values,
  nextStep,
  handleInputPref,
}) => {
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };
  
  return (
    <div>
      <div className={styles.containerForm}>
        <form className={styles.flexForm} onSubmit={(e) => submitFormData(e)}>
          <div className={styles.roomType}>
          <div className={styles.rent}>
            <label htmlFor="rent">Monthly Rent</label>
            <input
              value={values.rent}
              onChange={handleFormData("rent")}
              name="rent"
              id="rent"
              type="number"
              placeholder="price/month"
              required
            />
          </div>
            <label htmlFor="roomtype">Room type*</label>
            <select
              onChange={handleFormData("roomType")}
              name="roomType"
              id="roomType"
              placeholder="Room Type"
              value={values.roomType}
              required
            >
              <option value="Single">Single</option>
              <option value="Shared">Shared</option>
            </select>
          </div>
          <fieldset>
            <legend>About the flat</legend>
            <section>
              <div className={styles.flexColumn}>
                <div>
                  <input
                    className={styles.styledCheckbox}
                    value={values.aboutFlat.bedrooms}
                    onChange={(e) => handleAbout('bedrooms', e)}
                    name="bedrooms"
                    id="bedrooms"
                    type="number"
                    placeholder="3"
                    required
                  />
                  <label htmlFor="bedrooms">Bedrooms</label>
                </div>
                <div>
                  <input
                    className={styles.styledCheckbox}
                    value={values.aboutFlat.bathrooms}
                    onChange={(e) => handleAbout('bathrooms', e)}
                    name="bathrooms"
                    id="bathrooms"
                    type="number"
                    placeholder="1"
                    required
                  />
                  <label htmlFor="bathrooms">Bathrooms</label>
                </div>
                <div>
                  <input
                    className={styles.styledCheckbox}
                    value={values.aboutFlat.kitchen}
                    onChange={(e) => handleAbout('kitchen', e)}
                    name="kitchen"
                    id="kitchen"
                    type="number"
                    placeholder="1"
                    required
                  />
                  <label htmlFor="kitchen">Kitchen</label>
                </div>
              </div>
              <div className={styles.flexColumn}>
                <div>
                  <label className={styles.labelContainer} htmlFor="airCond">
                    Air Conditioning
                    <input
                      type="checkbox"
                      name="action"
                      id="airCond"
                      checked={values.aboutFlat.airCond}
                      onChange={(e) => handleAboutCheck("airCond", e)}
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>
                <div>
                  <label className={styles.labelContainer} htmlFor="billsIncl">
                    Bills included
                    <input
                      checked={values.aboutFlat.billsIncl}
                      onChange={(e) => handleAboutCheck("billsIncl", e)}
                      type="checkbox"
                      name="action"
                      id="billsIncl"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>
                <div>
                  <label className={styles.labelContainer} htmlFor="wifi">
                    WiFi
                    <input
                      checked={values.aboutFlat.wifi}
                      onChange={(e) => handleAboutCheck("wifi", e)}
                      type="checkbox"
                      name="action"
                      id="wifi"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>
              </div>
            </section>
          </fieldset>

          <div className={styles.address}>
            <label htmlFor="address">Address</label>
            <input
              value={values.address}
              onChange={handleFormData("address")}
              name="address"
              id="address"
              type="text"
              placeholder="via della felicità"
              required
            />
          </div>
          <button className={styles.nextStep} onSubmit={nextStep}>
            <BsArrowRightCircleFill className={styles.icon} />
          </button>
        </form>
      </div>
      <img
        className={styles.img}
        src="https://img.freepik.com/free-vector/street-map-desing-with-catering-sector-pins_23-2147618798.jpg?w=740"
        width={"100%"}
        height={"30%"}
        alt="map"
      ></img>
    </div>
  );
};
export default FirstStepForm;
