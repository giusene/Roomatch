import { useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import styles from "./../registrationSteps/FirstStep.module.scss";

const FirstStep = ({ handleFormData, values, nextStep }) => {
  const [message, setMessage] = useState("");

  const submitFormData = (e) => {
    e.preventDefault();
    values.password === e.target.matchpwd.value
      ? nextStep()
      : setMessage("le password non coincidono");
  };

  return (
    <div className={styles.containerForm}>
      <form className={styles.flexForm} onSubmit={(e) => submitFormData(e)}>
        <label htmlFor="photo">Photo</label>
        <input
          value={values.photo}
          onChange={handleFormData("photo")}
          name="photo"
          id="photo"
          type="img"
          placeholder="Photo URL"
          required
        />

        <label htmlFor="fullname">Name / Surname*</label>
        <input
          value={values.name}
          onChange={handleFormData("name")}
          name="name"
          id="name"
          type="text"
          placeholder="Name"
          required
        />

        <input
          value={values.surname}
          onChange={handleFormData("surname")}
          name="surname"
          id="surname"
          type="text"
          placeholder="Surname"
          required
        />
        <label htmlFor="email">Email*</label>
        <input
          value={values.email}
          onChange={handleFormData("email")}
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          value={values.password}
          onChange={handleFormData("password")}
          onClick={() => setMessage("")}
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          required
        />

        <label htmlFor="matchpwd">Confirm password</label>
        <input
          value={values.matchPwd}
          onChange={() => setMessage("")}
          name="matchpwd"
          id="matchpwd"
          type="password"
          placeholder="Confirm password"
          required
        />
        {message}
        <button className={styles.nextStep} onSubmit={nextStep}>
          <BsArrowRightCircleFill />
        </button>
      </form>
    </div>
  );
};

export default FirstStep;
