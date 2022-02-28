import styles from "./RegsiterForm.module.css";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../Api";

export default function RegsiterForm() {
  const emailRef = useRef();
  const pass1Ref = useRef();
  const pass2Ref = useRef();
  const nav = useNavigate();
  const [message, setMessage] = useState("");

  function submit(event) {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPass1 = pass1Ref.current.value;
    const enteredPass2 = pass2Ref.current.value;

    const user = {
      email: enteredEmail,
      password1: enteredPass1,
      password2: enteredPass2,
    };

    axios
      .post(`${API}/register`, user)
      .then(() => {
        nav("/login");
      })
      .catch((err) => {
        
        if (err.response.status === 422) {
          setMessage("Email invalid");
        } else if (err.response.status === 409) {
          setMessage(err.response.data.detail);
        }
      });
  }

  return (
    <div className={styles.wrapper}>
      <h1>Sign up</h1>
      <form className={styles.form}>
        <input
          type="email"
          patern=".+@+.+\.+."
          id="email"
          className={styles.email}
          placeholder="Enter email"
          ref={emailRef}
          required
        />
        <input
          type="password"
          id="password1"
          className={styles.pass1}
          placeholder="Enter password"
          ref={pass1Ref}
          required
        />
        <input
          type="password"
          id="password2"
          className={styles.pass2}
          placeholder="Confirm password"
          ref={pass2Ref}
          required
        />
        <button onClick={submit} className={styles.btn}>
          Register
        </button>
      </form>
      <div className={styles.linkwrapper}>
        <Link to="/login" className={styles.link}>
          Already have an account?
        </Link>
      </div>
      {message && <div className={styles.message}>{message}</div>}
    </div>
  );
}
