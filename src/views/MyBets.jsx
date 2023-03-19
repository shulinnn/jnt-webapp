import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bet from "../components/BetComponent";

export default function MyBets() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  };

  const fetchApi = () => {
    fetch(
      "http://jnt.wbgl.eu/api/bets/" +
        JSON.parse(localStorage.getItem("user_data")).id,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setData(data));
    setDataLoaded(true);
  };

  useEffect(() => {
    if (!dataLoaded) {
      fetchApi();
    }
  });

  const renderBets = () => {
    if (dataLoaded && data != null)
      return data.map((e, i) =>
        e != undefined ? (
          <Bet
            key={i}
            matchId={e.matchId}
            betAmount={e.betAmount}
            matchData={e.bettedOn.teams}
          />
        ) : null
      );
  };

  return (
    <div className="flex flex-col items-center gap-y-4 w-full">
      {renderBets()}
    </div>
  );
}
