import ButtonComponent from "../components/ButtonComponent";
import Message from "../components/MessageComponent";

export default function Chat() {
  return (
    <>
      <h1 style={{ marginBottom: 16 }}>Chat</h1>
      <div className="chat">
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="send-message">
        <textarea style={{ marginTop: 16 }} rows={8} />
        <ButtonComponent text="ODESLAT" />
      </div>
    </>
  );
}
