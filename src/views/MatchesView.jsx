import MatchComponent from "../components/MatchComponent";
import { useEffect, useState } from "react";

export default function Matches() {
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchApi = () => {
    fetch("http://jnt.wbgl.eu/api/matches", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setDataLoaded(true));
  };

  useEffect(() => {
    if (!dataLoaded) {
      fetchApi();
    }
  });

  const renderMatches = () => {
    if (dataLoaded && data != null) {
      return data.map((item, key) => (
        <MatchComponent key={key} matchData={item} />
      ));
    } else {
      return "Žádné zápasy se neodehrály";
    }
  };

  return (
    <>
      <h1 style={{ marginBottom: 16 }}>Zápasy</h1>
      <div className="flex flex-col">
        <div className="flex flex-col gap-y-8">{renderMatches()}</div>
      </div>
    </>
  );
}
