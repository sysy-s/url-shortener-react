import styles from "./Block.module.css";

export default function Block(props) {
  return <div className={styles.wrapper}>{props.children}</div>;
}
