import styles from "./StatDetail.module.css";

export default function StatDetail(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cookiesLabel}>Cookies</div>
      <div className={styles.cookies}>{props.cookies}</div>
      <div className={styles.headersLabel}>Headers</div>
      <div className={styles.headers}>{props.headers}</div>
      <div className={styles.timeLabel}>Time clicked</div>
      <div className={styles.time}>{props.time}</div>
    </div>
  );
}
