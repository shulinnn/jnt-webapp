import MatchComponent from "../components/MatchComponent";

export default function Matches() {
  return (
    <>
      <h1 style={{ marginBottom: 16 }}>Historie zápasů</h1>
      <div className="flex flex-col">
        <div className="flex flex-col gap-y-8">
          <MatchComponent />
          <MatchComponent />
          <MatchComponent />
          <MatchComponent />
        </div>
      </div>
    </>
  );
}
