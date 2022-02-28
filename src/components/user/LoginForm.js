import styles from "./LoginForm.module.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setToken } from "./Auth";

export default function LoginForm() {
  const usernameRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  function submit(event) {
    event.preventDefault();
    const enteredUsername = usernameRef.current.value;
    const enteredPass = passRef.current.value;
    const userData = new FormData();
    userData.append("username", enteredUsername);
    userData.append("password", enteredPass);

    axios
      .post("http://localhost:8000/login", userData)
      .then((res) => {
        const token = JSON.stringify(res.data);
        setToken(token);
        console.log('success');
        navigate('/premium');
      })
      .catch((error) => console.log(error));
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
          // onChange={(e) => setUsername(e.target.value)}
          ref={usernameRef}
          required
        />
        <input
          type="password"
          id="password1"
          className={styles.pass1}
          placeholder="Enter password"
          // onChange={(e) => setPassword(e.target.value)}
          ref={passRef}
          required
        />
        <button onClick={submit} className={styles.btn}>
          Login
        </button>
      </form>
      <div className={styles.messages}></div>
    </div>
  );
}