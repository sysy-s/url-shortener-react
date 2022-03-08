import axios from "axios";
import { useEffect, useState, useContext } from "react";

import StatItem from "./StatItem";
import styles from "./StatList.module.css";
import Block from "../ui/Block";
import { fetchToken } from "../user/Auth";
import { API } from "../../Api";
import StatDetail from "./StatDetail";
import { DetailContext } from "./Context";

export default function StatList() {
  const [stats, getStats] = useState("");
  const [details, setDetails] = useContext(DetailContext);
  const token = JSON.parse(fetchToken());

  const config = {
    headers: { Authorization: `${token.token_type} ${token.access_token}` },
  };

  const getAllStats = () => {
    axios
      .get(`${API}/stats/`, config)
      .then((res) => {
        const allStats = res.data;
        getStats(allStats);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllStats();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.stats}>
          {stats &&
            stats.map((stat) => (
              <Block className={styles.item} key={stat.id}>
                <StatItem
                  short={stat.short}
                  long={stat.long}
                  created={stat.created}
                  last_clicked={stat.last_clicked}
                  click_count={stat.click_count}
                />
              </Block>
            ))}
          {!stats && (
            <Block className={styles.item}>
              <h1>Looks like you dont own any URLs</h1>
            </Block>
          )}
        </div>
      </div>
      <div className={styles.detailListWrapper}>
        <h1>URL visits for {details.short}</h1>
        <div className={styles.details}>
          {details.details &&
            details.details.map((detail) => (
              <StatDetail
                small={true}
                time={detail.time}
                cookies={detail.cookies}
                headers={detail.headers}
                key={detail.id}
              />
            ))}
        </div>
      </div>
    </>
  );
}
