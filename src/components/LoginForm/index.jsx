import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginAction } from "./../../store/actions";
import styles from "./LoginForm.module.scss";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [message, setMessage] = useState("");
  let url = useNavigate();
  const [redirect, setRedirect] = useState("/login");
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(loginForm, setRedirect, setMessage));
  };

  useEffect(() => {
    url(redirect);
  }, [url, redirect]);

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <label className={styles.label} htmlFor="email">
          Email*
        </label>
        <input
          className={styles.input}
          id="email"
          name="email"
          onChange={(e) =>
            setLoginForm({ ...loginForm, email: e.target.value })
          }
          type="email"
          placeholder="email"
          required
        />
        <label className={styles.label} htmlFor="password">
          Password*
        </label>
        <input
          className={styles.input}
          id="password"
          name="password"
          onChange={(e) =>
            setLoginForm({ ...loginForm, password: e.target.value })
          }
          type="password"
          placeholder="password"
          required
        />
        {message && <p className={styles.errorMessage}>{message}</p>}
        <button>Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
