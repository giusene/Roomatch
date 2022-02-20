import { Link } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import styles from "./HeaderForms.module.scss";
import { useState, useEffect } from "react";

const HeaderForms = ({ step }) => {
  //   const stepTitle = props.stepTitle || "Create your profile";
  const logo = "ROOMATCH";
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (step) {
      case 1:
        setTitle("Create profile");
        break;
      case 2:
        setTitle("What roomate are you?");
        break;
      case 3:
        setTitle("Your info");
        break;
      default:
        setTitle("Login");
    }
  }, [step]);

  return (
    <div className={styles.main}>
      <h1 className={styles.logo}>{logo}</h1>
      <p className={styles.stepText}>{title}</p>
      {step && (
        <>
          <div className={styles.stepperWrapper}>
            <div
              className={`${styles.stepCounter} ${step === 1 && styles.active}`}
            ></div>
            <div
              className={`${styles.stepCounter} ${step === 2 && styles.active}`}
            ></div>
            <div
              className={`${styles.stepCounter} ${step === 3 && styles.active}`}
            ></div>
          </div>
        </>
      )}
      <div>
        <Link className={styles.closeBtn} to="/">
          <IoIosCloseCircle />
        </Link>
      </div>
    </div>
  );
};
export default HeaderForms;
