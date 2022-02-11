import styles from "./Login.module.scss";
import LoginForm from "./../../components/LoginForm";
import HeaderForms from "../../components/HeaderForms/HeaderForms";

const Login = () => {
  return (
    <div className={styles.main}>
      <HeaderForms />
      <LoginForm />
    </div>
  );
};

export default Login;
