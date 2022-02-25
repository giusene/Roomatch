import styles from "./Login.module.scss";
import LoginForm from "./../../components/LoginForm";

const Login = ({ regmessage }) => {
  return (
    <div className={styles.main}>
      <div className={styles.image}></div>
      <div className={styles.form}>
        <LoginForm regmessage={regmessage} />
      </div>
    </div>
  );
};

export default Login;
