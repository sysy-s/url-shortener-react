import Block from "../components/ui/Block";
import StatList from "../components/stats/StatList";
import Header from "../components/ui/Header";

export default function Stats() {
  return (
    <div>
      <Header />
      <Block>
        <StatList />
      </Block>
      </div>
  );
}
