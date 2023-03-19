import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Flag from "react-world-flags";
import MatchComponent from "../components/MatchComponent";
import { countries } from "country-data";

export default function Profile() {
  const [data, setData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  };

  const params = useParams();

  const fetchApi = () => {
    fetch("http://jnt.wbgl.eu/api/profile/" + params.id, requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setDataLoaded(true));
  };

  const renderTeam = () => {
    if (dataLoaded && data != null) {
      if (data.Team != null)
        return (
          <>
            {data.Team.team_logo != "" ? (
              <img
                src={`http://jnt.wbgl.eu/api/${data.Team.team_logo}`}
                style={{ width: 24, height: 24, borderRadius: "100%" }}
              />
            ) : (
              <img
                src={`http://jnt.wbgl.eu/api/no-team.jpg`}
                style={{ width: 24, height: 24, borderRadius: "100%" }}
              />
            )}

            <Link to={`/team/${data.Team.id}`} className="text-lg">
              {data.Team.team_name}
            </Link>
          </>
        );
      else
        return (
          <>
            <img
              src={`http://jnt.wbgl.eu/api/no-team.jpg`}
              style={{ width: 24, height: 24, borderRadius: "100%" }}
            />
            <span className="text-lg">No team :(</span>
          </>
        );
    }
  };

  const renderFlag = () => {
    if (dataLoaded && data != null) {
      return (
        <>
          <Flag code={data.user_flag} height={20} width={27} />
          <span className="text-lg">{countries[data.user_flag].name}</span>
        </>
      );
    }
  };

  const renderMatches = () => {
    if (dataLoaded && data != null) {
      if (data.Team == null) {
        return "Hráč nemá tým";
      }
      if (data.Team.Match == null) {
        return "Hráč ještě nehrál žádné zápasy !";
      } else {
        return data.Team.Match.map((item, key) => (
          <MatchComponent key={key} matchData={item} />
        ));
      }
    }
  };

  useEffect(() => {
    if (!dataLoaded) {
      fetchApi();
    }
  });

  return (
    <>
      <h1 className="font-medium text-2xl">Profil</h1>
      <div className="flex flex-col">
        <img
          src={
            dataLoaded ? `http://jnt.wbgl.eu/api/${data.user_photo}` : "null"
          }
          style={{ width: 150, height: 150 }}
          className="mt-8 mb-8 self-center"
        />
        <h1 className="font-medium text-2xl mb-4">Profil</h1>
        <div className="flex flex-col gap-y-4 bg-secondary p-4 shadow-md rounded-2xl">
          <h1 className="font-medium text-2xl">{data.username}</h1>
          <span className="font-medium text-lg">Tým</span>
          <div className="flex flex-row gap-x-2 items-center">
            {renderTeam()}
          </div>
          <span className="font-medium text-lg">Národnost</span>
          <div className="flex flex-row gap-x-2 items-center">
            {renderFlag()}
          </div>
        </div>
        <h1 style={{ marginTop: 16 }} className="font-medium text-2xl mb-4">
          Historie zápasů
        </h1>
        <div className="flex flex-col gap-y-8">{renderMatches()}</div>
      </div>
    </>
  );
}
