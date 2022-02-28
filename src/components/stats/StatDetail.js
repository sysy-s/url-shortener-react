import styles from './StatDetail.module.css'

export default function StatDetail(props) {
    return <div className={styles.wrapper}>
      <div className={styles.cookiesLabel}>Short URL</div>
      <div className={styles.cookies}><h2>{props.cookies}</h2></div>
      <div className={styles.client_hostLabel}>Client Host</div>
      <div className={styles.client_host}><h3>{props.client_host}</h3></div>
      <div className={styles.headersLabel}>Headers</div>
      <div className={styles.headers}>{props.headers}</div>
      <div className={styles.timeLabel}>Time clicked</div>
      <div className={styles.time}>{props.time}</div>
    </div>
}