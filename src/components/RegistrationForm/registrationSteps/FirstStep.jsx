import { useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import styles from "./../registrationSteps/FirstStep.module.scss";
import { uploadImg } from "../../../libs/http";

const FirstStep = ({ handleFormData, values, nextStep, setImage }) => {
  const [message, setMessage] = useState("");

  const submitFormData = (e) => {
    e.preventDefault();
    values.password === e.target.matchpwd.value
      ? nextStep()
      : setMessage("le password non coincidono");
  };

  const selectPhoto = (e) => {
    uploadImg(e.target.files[0]).then((result) =>
      setImage(result.data.display_url)
    );
  };

  return (
    <div className={styles.containerForm}>
      <form className={styles.flexForm} onSubmit={(e) => submitFormData(e)}>
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${values.photo})` }}
        >
          <label htmlFor="upload" className={styles.uploadBtn}>
            +
          </label>
        </div>
        <input
          type="file"
          onChange={(e) => selectPhoto(e)}
          accept=".jpg, .jpeg, .png"
          placeholder="carica"
          name="upload"
          id="upload"
          title="Carica"
          className={styles.hidden}
        />

        <label className={styles.label} htmlFor="fullname">
          Name / Surname*
        </label>
        <input
          className={styles.inputNameSur}
          value={values.name}
          onChange={handleFormData("name")}
          name="name"
          id="name"
          type="text"
          placeholder="Name"
          required
        />

        <input
          className={styles.inputNameSur}
          value={values.surname}
          onChange={handleFormData("surname")}
          name="surname"
          id="surname"
          type="text"
          placeholder="Surname"
          required
        />
        <label className={styles.label} htmlFor="email">
          Email*
        </label>
        <input
          className={styles.input}
          value={values.email}
          onChange={handleFormData("email")}
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          required
        />

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          value={values.password}
          onChange={handleFormData("password")}
          onClick={() => setMessage("")}
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          required
        />

        <label className={styles.label} htmlFor="matchpwd">
          Confirm password
        </label>
        <input
          className={styles.input}
          value={values.matchPwd}
          onChange={() => setMessage("")}
          name="matchpwd"
          id="matchpwd"
          type="password"
          placeholder="Confirm password"
          required
        />
        {message}
        <div className={styles.arrowBtns}>
          <button className={styles.nextStep} onSubmit={nextStep}>
            <BsArrowRightCircleFill className={styles.icon} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FirstStep;
