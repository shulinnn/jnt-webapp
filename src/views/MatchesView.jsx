import MatchComponent from "../components/MatchComponent";

export default function Matches() {
  return (
    <>
      <h1 style={{ marginBottom: 16 }}>Historie zápasů</h1>
      <div className="profile">
        <div className="match-history">
          <MatchComponent />
          <MatchComponent />
          <MatchComponent />
          <MatchComponent />
        </div>
      </div>
    </>
  );
}
