import styles from "./LoginForm.module.css";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { setToken } from "./Auth";
import { API } from "../../Api";

export default function LoginForm() {
  const usernameRef = useRef();
  const passRef = useRef();
  const nav = useNavigate();
  const [message, setMessage] = useState("");

  function submit(event) {
    event.preventDefault();
    const enteredUsername = usernameRef.current.value;
    const enteredPass = passRef.current.value;

    const userData = new FormData();
    userData.append("username", enteredUsername);
    userData.append("password", enteredPass);

    axios
      .post(`${API}/login`, userData)
      .then((res) => {
        const token = JSON.stringify(res.data);
        setToken(token);
        nav("/premium");
      })
      .catch((err) =>
        setMessage('Invalid data')
      );
  }

  return (
    <div className={styles.wrapper}>
      <h1>Sign in</h1>
      <form className={styles.form}>
        <input
          type="email"
          id="username"
          className={styles.username}
          placeholder="Enter email"
          ref={usernameRef}
          required
        />
        <input
          type="password"
          id="password1"
          className={styles.pass1}
          placeholder="Enter password"
          ref={passRef}
          required
        />
        <button onClick={submit} className={styles.btn}>
          Login
        </button>
      </form>
      <div className={styles.linkwrapper}>
        <Link to="/register" className={styles.link}>
          Dont have an account yet?
        </Link>
      </div>
      {message && <div className={styles.message}>{message}</div>}
    </div>
  );
}
