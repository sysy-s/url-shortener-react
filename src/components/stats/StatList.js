import StatItem from "./StatItem";
import styles from "./StatList.module.css";
import Block from "../ui/Block";

export default function StatList() {
  const STATS = [
    {
      id: 4,
      long: "https://www.youtube.com/watch?v=0sOvCWFmrtA&t=27587s",
      short: "hello",
      created: "2022-02-17T19:18:58.731019+00:00",
      last_clicked: "2022-02-17T19:55:41.706596+00:00",
      click_count: 6,
      user_id: 1,
    },
    {
      id: 3,
      long: "https://www.youtube.com/watch?v=0sOvCWFmrtA&t=27587s",
      short: "string",
      created: "2022-02-17T19:18:12.390401+00:00",
      last_clicked: "2022-02-17T19:56:16.027802+00:00",
      click_count: 1,
      user_id: 1,
    },
    {
      id: 5,
      long: "https://github.com/sysy-s/url-shortener/tree/main/app",
      short: "lol",
      created: "2022-02-17T19:57:03.131929+00:00",
      last_clicked: "2022-02-17T19:57:36.182773+00:00",
      click_count: 5,
      user_id: 1,
    },
  ];
  return (
    <div className={styles.wrapper}>
      {STATS.map((stat) => (
        <Block>
          <StatItem
            short={stat.short}
            long={stat.long}
            created={stat.created}
            last_clicked={stat.last_clicked}
            click_count={stat.click_count}
            key={stat.id}
          />
        </Block>
      ))}
    </div>
  );
}
