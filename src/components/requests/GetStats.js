import axios from "axios";

export default function GetStats() {
    const token = JSON.parse(fetchToken());
  const config = {
    headers: { Authorization: `${token.token_type} ${token.access_token}` },
  };

  const getAllStats = () => {
    axios
      .get(`${API}/stats/`, config)
      .then((res) => {
        const allStats = res.data;
        console.log(allStats);
      })
      .catch((err) => console.log(err));
  };
}