import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { removeToken } from "../user/Auth";
import { AuthContext } from "../user/Auth";
import { useContext } from "react";

export default function Header(props) {
  const [logged, dispatch] = useContext(AuthContext);
  
  const logout = () => {
    removeToken();
    dispatch({type: 'logout'});
    window.location.reload(false);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <h1>shrink.me</h1>
      </div>
      <div className={styles.links}>
        <div className={styles.default}>
          <Link to="/">Default</Link>
        </div>
        <div>{props.type !== "auth" && <Link to="/premium">Premium</Link>}</div>
        <div>
          <Link to="/stats">Stats</Link>
        </div>
        <div className={styles.misc}>{props.children}</div>
        {/* only  renders when user is not logged in */}
        {!logged && (
          <div>
            <Link to="/login">Login</Link>
          </div>
        )}
        {!logged && (
          <div>
            <Link to="/register">Register</Link>
          </div>
        )}
        {logged && (
          <div className={styles.logout}>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
