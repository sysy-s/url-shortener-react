import { DetailProvider } from "../components/stats/Context";
import StatList from "../components/stats/StatList";

export default function Stats() {
  return <DetailProvider><StatList /></DetailProvider>;
}
