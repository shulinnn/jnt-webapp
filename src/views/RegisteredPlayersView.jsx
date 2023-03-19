import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
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
    fetch("http://jnt.wbgl.eu/api/players", requestOptions)
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
    var tempArr = [];

    for (let index = 0; index < data.length; index++) {
      const c = (
        <RegisteredPlayer
          key={index}
          userId={[data[index].id]}
          flag={data[index].user_flag}
          username={data[index].username}
          photo={data[index].user_photo}
        />
      );

      tempArr.push(c);
    }

    return tempArr;
  };

  return (
    <>
      <h1 className="font-medium text-2xl">Registrovaní hráči</h1>
      <div className="flex flex-row px-0 py-4 gap-4 flex-wrap justify-between">
        {!dataLoaded ? (
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              minHeight: "70vh",
              margin: "0 auto",
            }}
            wrapperClass=""
            visible={true}
          />
        ) : (
          renderPlayers()
        )}
      </div>
    </>
  );
}
