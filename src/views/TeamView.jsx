import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Flag from "react-world-flags";
import BadgeComponent from "../components/BadgeComponent";
import MatchComponent from "../components/MatchComponent";

export default function Team() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  };

  const params = useParams();

  const fetchApi = () => {
    fetch("http://jnt.wbgl.eu/api/team/" + params.id, requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data));
    setDataLoaded(true);
  };

  useEffect(() => {
    if (!dataLoaded) {
      fetchApi();
    }
  });

  function renderPlayers() {
    if (data != null && data.players != null) {
      return data.players.map((e, i) => (
        <Link to={`/profile/${e.id}`} key={i}>
          <div className="flex flex-row gap-x-2 items-center h-auto">
            <Flag code={e.user_flag} width={24} height={24} />
            <img
              src={`http://jnt.wbgl.eu/api/${e.user_photo}`}
              style={{ width: 24, height: 24 }}
            />
            {e.username}
          </div>
        </Link>
      ));
    }
  }

  function renderMatches() {
    if (dataLoaded && data != null) {
      if (data.Match != null) {
        let tempArr = [];
        Object.keys(data.Match).forEach((key, index) => {
          console.log(data.Match[index]);
          const c = <MatchComponent key={key} matchData={data.Match[index]} />;
          tempArr.push(c);
        });
        return tempArr;
      } else {
        return "Tým nehrál žádné zápasy";
      }
    }
  }

  return (
    <>
      <h1 className="font-medium text-2xl">{data.team_name}</h1>
      <div className="flex flex-col">
        <img src={`http://jnt.wbgl.eu/api/${data.team_logo}`} />
        <h1 className="font-medium text-2xl mb-4">Profil</h1>
        <div className="flex flex-col gap-y-8 bg-secondary p-4 shadow-md rounded-2xl">
          <h1 className="font-medium text-2xl">Členové</h1>
          {renderPlayers()}
        </div>
        <h1 style={{ marginTop: 16 }} className="font-medium text-2xl mb-4">
          Historie zápasů
        </h1>
        <div className="flex flex-col gap-y-8">{renderMatches()}</div>
      </div>
    </>
  );
}
