import styles from "./HeaderAddRoomForm.module.scss";
import { useState, useEffect } from "react";

const HeaderAddRoomForm = ({ step }) => {
  const logo = "ROOMATCH";
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (step) {
      case 1:
        setTitle("Room Info");
        break;
      case 2:
        setTitle("Roomate Info & Photos");
        break;
      case 3:
        setTitle("Summary");
        break;
      default:
        setTitle("Login");
    }
  }, [step]);

  return (
    <>
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
    </>
  );
};
export default HeaderAddRoomForm;