import { FaShower } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import { GiCook } from "react-icons/gi";
import { BsArrowRightCircleFill } from "react-icons/bs";
import styles from "./FirstStepForm.module.scss";
import CitiesSelector from "./../../CitiesSelector";

const FirstStepForm = ({
  handleFormData,
  handleAbout,
  handleAboutCheck,
  values,
  nextStep,
  handleInputCities,
}) => {
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className={styles.main}>
      <form className={styles.flexForm} onSubmit={(e) => submitFormData(e)}>
        <div className={styles.rentType}>
          <div className={styles.rent}>
            <label className={styles.label} htmlFor="rentPrice">
              Monthly Rent
            </label>
            <input
              className={styles.rentInput}
              value={values.rentPrice}
              onChange={handleFormData("rentPrice")}
              name="rent"
              id="rentPrice"
              type="number"
              placeholder="price/month"
              min={1}
              required
            />
            <span>,00 €/month</span>
          </div>
          <div className={styles.roomType}>
            <label className={styles.label} htmlFor="roomtype">
              Room type*
            </label>
            <select
              className={styles.select}
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
        </div>
        <div className={styles.city}>
          <label className={styles.label} htmlFor="City">
            City*
          </label>
          <CitiesSelector
            handleInputCities={handleInputCities}
            values={values}
          />
        </div>
        <div className={styles.address}>
          <label className={styles.label} htmlFor="address">
            Address
          </label>
          <input
            className={styles.adressInput}
            value={values.roomAddress}
            onChange={handleFormData("roomAddress")}
            name="roomAddress"
            id="roomAddress"
            type="text"
            placeholder="via della felicità"
            required
          />
        </div>
        <fieldset className={styles.fieldset}>
          <legend>About the flat</legend>
          <section>
            <div className={styles.flexColumn}>
              <div>
                <input
                  className={styles.flatInput}
                  value={values.aboutFlat.bedrooms}
                  onChange={(e) => handleAbout("bedrooms", e)}
                  name="bedrooms"
                  id="bedrooms"
                  type="number"
                  placeholder="3"
                  min={1}
                  required
                />
                <label className={styles.labelIcon} htmlFor="bedrooms">
                  <BiBed className={styles.icon} />
                </label>
              </div>
              <div>
                <input
                  className={styles.flatInput}
                  value={values.aboutFlat.bathrooms}
                  onChange={(e) => handleAbout("bathrooms", e)}
                  name="bathrooms"
                  id="bathrooms"
                  type="number"
                  placeholder="1"
                  min={1}
                  required
                />
                <label className={styles.labelIcon} htmlFor="bathrooms">
                  <FaShower className={styles.icon} />
                </label>
              </div>
              <div>
                <input
                  className={styles.flatInput}
                  value={values.aboutFlat.kitchen}
                  onChange={(e) => handleAbout("kitchen", e)}
                  name="kitchen"
                  id="kitchen"
                  type="number"
                  placeholder="1"
                  min={1}
                  required
                />
                <label className={styles.labelIcon} htmlFor="kitchen">
                  <GiCook className={styles.icon} />
                </label>
              </div>
            </div>
            <div className={styles.flexColumn2}>
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

        <div className={styles.arrowBtns}>
          <button className={styles.nextStep} onSubmit={nextStep}>
            <BsArrowRightCircleFill className={styles.icon} />
          </button>
        </div>
      </form>
    </div>
  );
};
export default FirstStepForm;
