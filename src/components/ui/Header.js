import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <h1>shrink.me</h1>
      </div>
      <div className={styles.links}>
        <div className={styles.default}>
          <Link to="/">Default</Link>
        </div>
        <div className={styles.premium}>
          <Link to="/premium">Premium</Link>
        </div>
        <div className={styles.stats}>
          <Link to="/stats">Stats</Link>
        </div>
        <div className={styles.misc}>{props.children}</div>
        <div className={styles.login}>
          <Link to="/login">Login</Link>
        </div>
        <div className={styles.register}>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
