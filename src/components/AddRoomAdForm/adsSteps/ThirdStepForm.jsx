import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircle } from "react-icons/bs";
import styles from "./ThirdStepForm.module.scss";
import { newRoom } from "../../../store/actions";
// import { httpPOST } from "../../../libs/http";

const ThirdStepForm = ({ formData, prevStep }) => {
  let url = useNavigate();
  const [redirect, setRedirect] = useState('/addroom')
  const dispatch = useDispatch()

  const formSubmit = () => {
    dispatch(
      newRoom(formData, setRedirect)
    );

    // httpPOST("/rooms", formData).then((data) => {
    //   console.log(data);
    //   url("/profile");
    // });
  };

  useEffect(()=> {
    url(redirect)
}, [url, redirect])

  return (
    <div className={styles.containerForm}>
      <ul>
        <li>
          <h4>RoomType:</h4>
          {formData.roomType}
        </li>
        <li>
          <h4>Rent Price:</h4>
          {formData.rentPrice} €/month
        </li>
        <li>
          <h4>Address:</h4>
          {formData.address}
        </li>
        <li>
          <h4>City:</h4>
          {formData.town} ({formData.city})
        </li>
        <li>
          <h4>Roommates:</h4>
          <ul className={styles.submenu}>
            <li>Males:{formData.roommates.males}</li>
            <li>Females:{formData.roommates.females}</li>
            <li>Other:{formData.roommates.others}</li>
          </ul>
        </li>
      </ul>
      <fieldset>
        <legend>About the flat</legend>
        <section>
          <div className={styles.flexColumn}>
            <div>
              <input
                className={styles.styledCheckbox}
                value={formData.aboutFlat.bedrooms}
                name="bedrooms"
                id="bedrooms"
                type="number"
                placeholder="3"
                readOnly
              />
              <label htmlFor="bedrooms">Bedrooms</label>
            </div>
            <div>
              <input
                className={styles.styledCheckbox}
                value={formData.aboutFlat.bathrooms}
                name="bathrooms"
                id="bathrooms"
                type="number"
                placeholder="1"
                readOnly
              />
              <label htmlFor="bathrooms">Bathrooms</label>
            </div>
            <div>
              <input
                className={styles.styledCheckbox}
                value={formData.aboutFlat.kitchen}
                name="kitchen"
                id="kitchen"
                type="number"
                placeholder="1"
                readOnly
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
        <section>
          <div className={styles.flexColumn}>
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

          <div className={styles.flexColumn}>
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
              <label className={styles.labelContainer} htmlFor="party">
                Party lover
                <input
                  checked={formData.friendlyWith.party === "1" ? true : false}
                  type="checkbox"
                  name="action"
                  id="party"
                  readOnly
                />
                <span className={styles.mark}></span>
              </label>
            </div>
          </div>
        </section>
      </fieldset>

      <button className={styles.prevStep} onClick={prevStep}>
        <BsArrowLeftCircle />
      </button>
      <button className={styles.nextStep} onClick={() => formSubmit()}>
        <BsArrowRightCircleFill />
      </button>
    </div>
  );
};

export default ThirdStepForm;
