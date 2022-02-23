import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import styles from "./ThirdStepForm.module.scss";
import { newRoom } from "../../../store/actions";
import { FaShower } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import { GiCook } from "react-icons/gi";

const ThirdStepForm = ({ formData, prevStep }) => {
  let url = useNavigate();
  const [redirect, setRedirect] = useState("/addroom");
  const dispatch = useDispatch();

  const formSubmit = () => {
    dispatch(newRoom(formData, setRedirect));
  };

  useEffect(() => {
    url(redirect);
  }, [url, redirect]);

  return (
    <div className={styles.containerForm}>
      <ul>
        <li className={styles.li1}>
          <h4>Room Type:</h4>
          {formData.roomType}
        </li>
        <li className={styles.li1}>
          <h4>Rent Price:</h4>
          {formData.rentPrice} €/month
        </li>
        <li className={styles.li1}>
          <h4>Address:</h4>
          {formData.roomAddress}
        </li>
        {console.log(formData)}
        <li className={styles.li1}>
          <h4>City:</h4>
          {formData.town} ({formData.city})
        </li>
        <li className={styles.li1}>
          <h4>Roommates:</h4>
          <ul className={styles.submenu}>
            <li className={styles.li2}>Males: {formData.roommates.males}</li>
            <li className={styles.li2}>
              Females: {formData.roommates.females}
            </li>
            <li className={styles.li2}>Other: {formData.roommates.others}</li>
          </ul>
        </li>
      </ul>
      <fieldset className={styles.fieldset}>
        <legend>About the flat</legend>
        <section className={styles.section}>
          <div className={styles.flexColumn}>
            <div>
              <input
                className={styles.flatInput}
                value={formData.aboutFlat.bedrooms}
                name="bedrooms"
                id="bedrooms"
                type="number"
                placeholder="3"
                readOnly
              />
              <label className={styles.labelIcon} htmlFor="bedrooms">
                <BiBed className={styles.icon} />
              </label>
            </div>
            <div>
              <input
                className={styles.flatInput}
                value={formData.aboutFlat.bathrooms}
                name="bathrooms"
                id="bathrooms"
                type="number"
                placeholder="1"
                readOnly
              />
              <label className={styles.labelIcon} htmlFor="bathrooms">
                <FaShower className={styles.icon} />
              </label>
            </div>
            <div>
              <input
                className={styles.flatInput}
                value={formData.aboutFlat.kitchen}
                name="kitchen"
                id="kitchen"
                type="number"
                placeholder="1"
                readOnly
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
                  checked={formData.aboutFlat.airCond}
                  readOnly
                />
                <span className={styles.mark}></span>
              </label>
            </div>
            <div>
              <label className={styles.labelContainer} htmlFor="billsIncl">
                Bills included
                <input
                  checked={formData.aboutFlat.billsIncl}
                  type="checkbox"
                  name="action"
                  id="billsIncl"
                  readOnly
                />
                <span className={styles.mark}></span>
              </label>
            </div>
            <div>
              <label className={styles.labelContainer} htmlFor="wifi">
                WiFi
                <input
                  checked={formData.aboutFlat.wifi}
                  type="checkbox"
                  name="action"
                  id="wifi"
                  readOnly
                />
                <span className={styles.mark}></span>
              </label>
            </div>
          </div>
        </section>
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend>Friendly for</legend>
        <section className={styles.section}>
          <div className={styles.flexColumn2}>
            <div>
              <label className={styles.labelContainer} htmlFor="lgbtq">
                LGBTQ+
                <input
                  type="checkbox"
                  name="action"
                  id="lgbtq"
                  checked={formData.friendlyWith.lgbtq === "1" ? true : false}
                  readOnly
                />
                <span className={styles.mark}></span>
              </label>
            </div>

            <div>
              <label className={styles.labelContainer} htmlFor="pet_owner">
                Pet owner
                <input
                  checked={
                    formData.friendlyWith.pet_owner === "1" ? true : false
                  }
                  readOnly
                  type="checkbox"
                  name="action"
                  id="pet_owner"
                />
                <span className={styles.mark}></span>
              </label>
            </div>
            <div>
              <label className={styles.labelContainer} htmlFor="multicultural">
                Multicultural
                <input
                  checked={
                    formData.friendlyWith.multicultural === "1" ? true : false
                  }
                  readOnly
                  type="checkbox"
                  name="action"
                  id="multicultural"
                />
                <span className={styles.mark}></span>
              </label>
            </div>
          </div>

          <div className={styles.flexColumn2}>
            <div>
              <label className={styles.labelContainer} htmlFor="veg">
                Veg
                <input
                  checked={formData.friendlyWith.veg === "1" ? true : false}
                  type="checkbox"
                  readOnly
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
                  checked={formData.friendlyWith.smooker === "1" ? true : false}
                  readOnly
                  type="checkbox"
                  name="action"
                  id="smooker"
                />
                <span className={styles.mark}></span>
              </label>
            </div>

            <div>
              <label className={styles.labelContainer} htmlFor="party_lover">
                Party lover
                <input
                  checked={
                    formData.friendlyWith.party_lover === "1" ? true : false
                  }
                  type="checkbox"
                  name="action"
                  id="party_lover"
                  readOnly
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
        <button className={styles.nextStep} onClick={() => formSubmit()}>
          Go!
        </button>
      </div>
    </div>
  );
};

export default ThirdStepForm;
