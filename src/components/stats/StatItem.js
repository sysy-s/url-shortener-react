import styles from "./StatItem.module.css";
import { useContext, useEffect, useState } from "react";
import { DetailContext } from "./Context";
import { API } from "../../Api";
import axios from "axios";
import { fetchToken } from "../user/Auth";

export default function StatItem(props) {
  const [detailIsOn, dispatch] = useContext(DetailContext);
  const [details, setDetails] = useContext(DetailContext);
  const token = JSON.parse(fetchToken());

  const config = {
    headers: { Authorization: `${token.token_type} ${token.access_token}` },
  };

  const getAllDetails = (short) => {
    axios
      .get(`${API}/stats/${short}`, config)
      .then((res) => {
        setDetails(res.data);
        dispatch({ type: "show-timestamps", payload: {data: res.data, short: short} });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.shortLabel}>Short URL</div>
      <div className={styles.short}>
        <h2>{props.short}</h2>
      </div>
      <div className={styles.longLabel}>Long URL</div>
      <div className={styles.long}>
        <h3>{props.long}</h3>
      </div>
      <div className={styles.lastClickedLabel}>Last clicked</div>
      <div className={styles.lastClicked}>{props.last_clicked}</div>
      <div className={styles.clickCountLabel}>Click count</div>
      <div className={styles.clickCount}>{props.click_count}</div>
      <div className={styles.createdLabel}>Date created</div>
      <div className={styles.created}>{props.created}</div>
      <div className={styles.btnwrapper}>
        <button
          className={styles.btn}
          onClick={() => {
            getAllDetails(props.short)
          }}
        >
          Show more
        </button>
      </div>
    </div>
  );
}
