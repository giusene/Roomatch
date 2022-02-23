import styles from "./Registration.module.scss";
import RegistrationForm from "./../../components/RegistrationForm";

const Registration = () => {
  return (
    <div className={styles.main}>
      <div className={styles.image}></div>
      <div className={styles.form}>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
