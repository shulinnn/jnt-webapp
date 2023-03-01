import BadgeComponent from "../components/BadgeComponent";
import MatchComponent from "../components/MatchComponent";

export default function Match() {
  return (
    <>
      <h1
        style={{ marginBottom: 16, display: "inline" }}
        className="font-medium text-2xl"
      >
        Zápas #1
      </h1>
      <BadgeComponent color="#da4785">LIVE</BadgeComponent>
      <BadgeComponent color="#334950">STREAM</BadgeComponent>

      <div
        className="flex flex-col justify-center gap-x-8 bg-secondary p-4 shadow-lg rounded-2xl"
        style={{ marginTop: 16 }}
      >
        <div className="flex flex-col justify-center gap-y-4 bg-secondary p-4 rounded-2xl w-full">
          <div className="flex flex-row justify-center items-center gap-x-3">
            <img src="https://via.placeholder.com/32" />
            <img src="https://via.placeholder.com/32" />
            <span>playername</span>
          </div>
          <h1 className="font-medium text-2xl drop-shadow-md text-center">
            VS
          </h1>
          <div className="flex flex-row justify-center items-center gap-x-3">
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
          <div className="flex flex-col items-center gap-x-3">
            <div className="flex flex-row gap-x-8">
              <span className="font-medium">TBD / TBD</span>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 justify-center">
            <BadgeComponent color="gray">1.12</BadgeComponent>
            <BadgeComponent color="gray">2.23</BadgeComponent>
          </div>
        </div>
      </div>
    </>
  );
}
