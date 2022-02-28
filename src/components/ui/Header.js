import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { removeToken } from '../user/Auth'

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
        <div>
          <Link to="/premium">Premium</Link>
        </div>
        <div>
          <Link to="/stats">Stats</Link>
        </div>
        <div className={styles.misc}>{props.children}</div>
        {/* only  renders when user is not logged in */}
        {props.token == null &&
        <div>
          <Link to="/login">Login</Link>
        </div>}
        {props.token == null &&
        <div>
          <Link to="/register">Register</Link>
        </div>}
        {props.token != null &&
        <div>
          <Link to="/" onClick={removeToken}>Logout</Link>
        </div>}
      </div>
    </div>
  );
}
