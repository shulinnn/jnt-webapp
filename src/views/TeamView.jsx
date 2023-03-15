export default function Team() {
  return (
    <>
      <h1 className="font-medium text-2xl">Team Name</h1>
      <div className="flex flex-col">
        <img
          src={`http://jnt.wbgl.eu/api/${data.user_photo}`}
          style={{ width: 150, height: 150 }}
          className="mt-8 mb-8 self-center"
        />
        <h1 className="font-medium text-2xl mb-4">Profil</h1>
        <div className="flex flex-col gap-y-4 bg-secondary p-4 shadow-md rounded-2xl">
          <h1 className="font-medium text-2xl">{data.username}</h1>
          <span className="font-medium text-lg">Tým</span>
          <div className="flex flex-row gap-x-2 items-center">
            {renderTeam()}
          </div>
          <span className="font-medium text-lg">Národnost</span>
          <div className="flex flex-row gap-x-2 items-center">
            {renderFlag()}
          </div>
        </div>
        <h1 style={{ marginTop: 16 }} className="font-medium text-2xl mb-4">
          Historie zápasů
        </h1>
        <div className="flex flex-col gap-y-8">{renderMatches()}</div>
      </div>
    </>
  );
}
