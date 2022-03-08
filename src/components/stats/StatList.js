import axios from "axios";
import { useEffect, useState, useContext } from "react";

import StatItem from "./StatItem";
import styles from "./StatList.module.css";
import Block from "../ui/Block";
import { fetchToken } from "../user/Auth";
import { API } from "../../Api";
import StatDetail from "./StatDetail";
import { DetailContext } from "./Context";

const dummyDetails = [
  {
    id: 45,
    headers:
      "Headers({'host': 'fastapi-url-shortener.herokuapp.com', 'connection': 'close', 'sec-ch-ua': '\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Opera\";v=\"84\"', 'sec-ch-ua-mobile': '?0', 'sec-ch-ua-platform': '\"Windows\"', 'upgrade-insecure-requests': '1', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 OPR/84.0.4316.21', 'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 'sec-fetch-site': 'none', 'sec-fetch-mode': 'navigate', 'sec-fetch-user': '?1', 'sec-fetch-dest': 'document', 'accept-encoding': 'gzip, deflate, br', 'accept-language': 'en-US,en;q=0.9', 'x-request-id': 'e0fc27a1-fb2a-4023-8bbf-53e6dd3fa852', 'x-forwarded-for': '83.22.40.189', 'x-forwarded-proto': 'https', 'x-forwarded-port': '443', 'via': '1.1 vegur', 'connect-time': '0', 'x-request-start': '1646560006664', 'total-route-time': '0'})",
    time: "2022-03-06T09:46:46.676581+00:00",
    url_id: 46,
    cookies: "{'PHPSESSID': 's667de9nbam3m6mtcbee9u3m79'}",
  },
];

export default function StatList() {
  const [stats, getStats] = useState("");
  const [detailIsOn, dispatch] = useContext(DetailContext);
  const [details, setDetails] = useState(detailIsOn);
  console.log(detailIsOn);
  console.log(detailIsOn.details);
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
      <div className={styles.detail}>
        <Block>
          {!detailIsOn && <h1>Details will appear here</h1>}
          {detailIsOn &&
            dummyDetails.map((detail) => (
                  <StatDetail
                    small={true}
                    time={detail.time}
                    key={detail.id}
                  />
            ))}
        </Block>
      </div>
    </div>
  );
}
