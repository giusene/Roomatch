import styles from "./HeaderAddRoomForm.module.scss";
import { useState, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const HeaderAddRoomForm = ({ step }) => {
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
    <div className={styles.main}>
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
        <Link className={styles.closeBtn} to="/profile">
          <IoIosCloseCircle />
        </Link>
      </div>
    </div>
  );
};
export default HeaderAddRoomForm;
