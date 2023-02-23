import MatchComponent from "../components/MatchComponent";

export default function Match() {
  return (
    <>
      <h1 style={{ marginBottom: 16, display: "inline" }}>Zápas #1</h1>
      <span
        style={{ marginBottom: 16, display: "inline" }}
        className="badge live"
      >
        LIVE
      </span>
      <span
        style={{ marginBottom: 16, display: "inline" }}
        className="badge stream"
      >
        STREAM
      </span>

      <div className="match" style={{ marginTop: 16 }}>
        <div className="match-info">
          <div className="player">
            <img src="https://via.placeholder.com/32" />
            <img src="https://via.placeholder.com/32" />
            <span>playername</span>
          </div>
          <h1>VS</h1>
          <div className="player">
            <img src="https://via.placeholder.com/32" />
            <img src="https://via.placeholder.com/32" />
            <span>playername</span>
          </div>
          <span style={{ textAlign: "center", fontSize: 12, fontWeight: 400 }}>
            27.10.2023 14:00
          </span>
          <span style={{ textAlign: "center", fontSize: 12, fontWeight: 400 }}>
            BO3
          </span>
          <div className="games">
            <div className="game">
              <span>TBD</span>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="badge stream">1.12</span>
            <span className="badge stream">2.34</span>
          </div>
        </div>
      </div>
    </>
  );
}
