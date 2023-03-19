import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import BadgeComponent from "../components/BadgeComponent";
import ButtonComponent from "../components/ButtonComponent";
import MatchComponent from "../components/MatchComponent";

export default function Match() {
  const [data, setData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [bet, setBet] = useState(null);
  const [betAmount, setBetAmount] = useState(0);

  const betObject = {
    betTeam: 1,
    betAmount: 10,
  };

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  };

  const params = useParams();

  const fetchApi = () => {
    fetch("http://jnt.wbgl.eu/api/match/" + params.id, requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data));
    setDataLoaded(true);
  };

  useEffect(() => {
    if (!dataLoaded) {
      fetchApi();
    }
  });

  const handleBet = () => {
    if (
      betAmount > JSON.parse(localStorage.getItem("user_data")).betting_points
    ) {
      toast.error("Nemáš tolik bodů !", {
        theme: "dark",
      });
    } else {
      let formData = new FormData();
      formData.append("betAmount", betAmount);
      formData.append(
        "betterId",
        JSON.parse(localStorage.getItem("user_data")).id
      );
      formData.append("matchId", params.id);
      formData.append("betTeamId", data.teams[bet].id);
      // send to backend
      fetch("http://jnt.wbgl.eu/api/bet", {
        method: "POST",
        body: formData,
      }).then((response) => {
        if (response.ok) {
          let c = JSON.parse(localStorage.getItem("user_data"));
          c.betting_points -= betAmount;
          localStorage.setItem("user_data", JSON.stringify(c));
          setBet(null);
          setBetAmount(0);
        }
      });
    }
  };

  const renderExchangeRates = () => {
    if (dataLoaded && data != null) {
      if (data.exchange_rates != null) {
        return data.exchange_rates.map((item, key) => (
          <BadgeComponent
            color={bet != key ? "#334950" : "#334990"}
            key={key}
            onClick={() => {
              if (bet == null) setBet(key);
              else setBet(null);
            }}
          >
            {item}
          </BadgeComponent>
        ));
      }
    }
  };

  const renderTeam = (id) => {
    if (dataLoaded && data.teams != null) {
      return data.teams[id].players.map((item, key) => (
        <Link to={`/profile/${item.id}`} key={key}>
          <div className="flex flex-row justify-center items-center gap-x-3">
            <img
              src={`http://jnt.wbgl.eu/api/${data.teams[id].team_logo}`}
              width={32}
              height={32}
            />
            <img
              src={`http://jnt.wbgl.eu/api/${item.user_photo}`}
              width={32}
              height={32}
            />
            <span>{item.username}</span>
          </div>
        </Link>
      ));
    }
  };

  const renderScores = () => {
    if (dataLoaded && data != null) {
      if (data.scores != null) {
        return `${data.scores[0]} : ${data.scores[1]}`;
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <h1
        style={{ marginBottom: 16, display: "inline" }}
        className="font-medium text-2xl"
      >
        Zápas #{data.id}
      </h1>

      <div
        className="flex flex-col justify-center gap-x-8 bg-secondary p-4 shadow-lg rounded-2xl"
        style={{ marginTop: 16 }}
      >
        <div className="flex flex-col justify-center gap-y-4 bg-secondary p-4 rounded-2xl w-full">
          {renderTeam(0)}
          <h1 className="font-medium text-2xl drop-shadow-md text-center">
            VS
          </h1>
          {renderTeam(1)}
          <span style={{ textAlign: "center", fontSize: 14, fontWeight: 400 }}>
            27.10.2023 14:00
          </span>
          <span style={{ textAlign: "center", fontSize: 14, fontWeight: 400 }}>
            {`BO${dataLoaded && data.rounds_to_play}`}
          </span>
          <div className="flex flex-col items-center gap-x-3">
            <div className="flex flex-row gap-x-8">
              <span className="font-medium">{renderScores()}</span>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 justify-center">
            {renderExchangeRates()}
          </div>
          <div
            className={
              bet == null
                ? "flex flex-col text-center gap-y-4 justify-center overflow-hidden transform duration-300 transition-all -translate-x-96"
                : "flex flex-col text-center gap-y-4 justify-center overflow-hidden transform duration-300 transition-all"
            }
          >
            <div>Kolik chceš vsadit ?</div>
            <input
              type="number"
              onChange={() => setBetAmount(event.target.value)}
              value={betAmount}
              className="shadow-inner bg-primary outline-none border border-primary transition-all duration-300 ease-in p-2 text-white placeholder:text-white"
              placeholder="Počet bodů"
              autoComplete="true"
              required
            />
            <ButtonComponent text="Vsadit" onClick={() => handleBet()} />
          </div>
        </div>
      </div>
    </>
  );
}
