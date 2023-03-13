import { useEffect, useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import Message from "../components/MessageComponent";
import { TailSpin } from "react-loader-spinner";

export default function Chat() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState({});
  const [message, setMessage] = useState("");

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  };

  const fetchApi = () => {
    fetch("http://jnt.wbgl.eu/api/messages", requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data));
    setDataLoaded(true);
  };

  useEffect(() => {
    if (!dataLoaded) {
      fetchApi();
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("message", message);
    formData.append("sender", JSON.parse(localStorage.getItem("user_data")).id);
    fetch("http://jnt.wbgl.eu/api/message", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Message sent");
          setDataLoaded(false);
          setMessage("");
        } else {
          console.log("Message not sent");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderMessages = () => {
    var tempArr = [];

    for (let index = 0; index < data.length; index++) {
      const c = (
        <Message
          key={index}
          senderName={data[index].sender.username}
          message={data[index].message}
          senderPhoto={data[index].sender.user_photo}
          senderTeam={data[index].sender.teamId}
        />
      );
      tempArr.push(c);
    }

    return tempArr;
  };

  return (
    <>
      <h1 style={{ marginBottom: 16 }}>Chat</h1>
      <div className="flex flex-col gap-y-4 h-[58vh] overflow-auto scroll-smooth">
        {!dataLoaded ? "No messages yet :(" : renderMessages()}
      </div>
      <div className="flex flex-col gap-y-3">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <textarea
            className="shadow-inner bg-secondary outline-none border-none text-white w-full resize-none p-4"
            onChange={() => setMessage(event.target.value)}
            value={message}
            style={{ marginTop: 16 }}
            rows={4}
            required
          />
          <ButtonComponent text="ODESLAT" />
        </form>
      </div>
    </>
  );
}
