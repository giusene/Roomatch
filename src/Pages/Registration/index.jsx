import styles from "./Registration.module.scss";
import RegistrationForm from "./../../components/RegistrationForm";

const Registration = ({ setRegmessage }) => {
  return (
    <div className={styles.main}>
      <div className={styles.image}></div>
      <div className={styles.form}>
        <RegistrationForm setRegmessage={setRegmessage} />
      </div>
    </div>
  );
};

export default Registration;
