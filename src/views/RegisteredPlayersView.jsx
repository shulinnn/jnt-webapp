import { useEffect, useState } from "react";
import RegisteredPlayer from "../components/RegisteredPlayerComponent";

export default function RegisteredPlayers() {
  const [data, setData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  };

  const fetchApi = () => {
    fetch("http://localhost:4000/players", requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data));
    setDataLoaded(true);
  };

  useEffect(() => {
    if (!dataLoaded) {
      fetchApi();
    }
  });

  const renderPlayers = () => {
    data.forEach(() => <RegisteredPlayer />);
  };

  return (
    <>
      <h1>Registered players</h1>
      <div className="container">{dataLoaded && renderPlayers()}</div>
    </>
  );
}
