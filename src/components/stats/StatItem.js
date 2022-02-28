import styles from "./StatItem.module.css";

export default function StatItem(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shortLabel}>Short URL</div>
      <div className={styles.short}><h2>{props.short}</h2></div>
      <div className={styles.longLabel}>Long URL</div>
      <div className={styles.long}><h3>{props.long}</h3></div>
      <div className={styles.lastClickedLabel}>Last clicked</div>
      <div className={styles.lastClicked}>{props.last_clicked}</div>
      <div className={styles.clickCountLabel}>Click count</div>
      <div className={styles.clickCount}>{props.click_count}</div>
      <div className={styles.createdLabel}>Date created</div>
      <div className={styles.created}>{props.created}</div>
      <div className={styles.btnwrapper}><button className={styles.btn}>Show more</button></div>
    </div>
  );
}
