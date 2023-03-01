import MatchComponent from "../components/MatchComponent";

export default function Profile() {
  return (
    <>
      <h1 className="font-medium text-2xl">Profil</h1>
      <div className="flex flex-col">
        <img
          src="https://via.placeholder.com/500"
          style={{ width: 150, height: 150 }}
          className="mt-8 mb-8 self-center"
        />
        <h1 className="font-medium text-2xl mb-4">Profil</h1>
        <div className="flex flex-col gap-y-4 bg-secondary p-4 shadow-md rounded-2xl">
          <h1 className="font-medium text-2xl">shulyN'</h1>
          <span className="font-medium text-lg">Tým</span>
          <div className="flex flex-row gap-x-2 items-center">
            <img
              src="https://via.placeholder.com/100"
              style={{ width: 24, height: 24, borderRadius: "100%" }}
            />
            <span className="text-lg">teamname</span>
          </div>
          <span className="font-medium text-lg">Národnost</span>
          <div className="flex flex-row gap-x-2">
            <img
              src="https://via.placeholder.com/100"
              style={{ hheight: 16, width: 27 }}
            />
            <span className="text-lg">countryname</span>
          </div>
        </div>
        <h1 style={{ marginTop: 16 }}>Historie zápasů</h1>
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
