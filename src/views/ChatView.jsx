import ButtonComponent from "../components/ButtonComponent";
import Message from "../components/MessageComponent";

export default function Chat() {
  return (
    <>
      <h1 style={{ marginBottom: 16 }}>Chat</h1>
      <div className="flex flex-col gap-y-4 h-[58vh] overflow-auto scroll-smooth">
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="flex flex-col gap-y-3">
        <textarea
          className="shadow-inner bg-secondary outline-none border-none text-white w-full resize-none p-4"
          style={{ marginTop: 16 }}
          rows={4}
        />
        <ButtonComponent text="ODESLAT" />
      </div>
    </>
  );
}
