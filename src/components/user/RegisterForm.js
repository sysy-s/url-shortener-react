import styles from "./RegsiterForm.module.css";
import { useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

export default function RegsiterForm() {
  const emailRef = useRef();
  const pass1Ref = useRef();
  const pass2Ref = useRef();

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
      .post("http://localhost:8000/register", user)
      .then(() => (<Navigate to='/premium' />))
      .catch((error) => console.log(error));
    console.log(JSON.stringify(user));
  }

  return (
    <div className={styles.wrapper}>
      <h1>Sign up</h1>
      <form className={styles.form}>
        <input
          type="email"
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
    </div>
  );
}
