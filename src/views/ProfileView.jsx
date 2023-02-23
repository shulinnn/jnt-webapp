import MatchComponent from "../components/MatchComponent";

export default function Profile() {
  return (
    <>
      <h1>Profil</h1>
      <div className="profile">
        <img src="https://via.placeholder.com/500" className="profile-pic" />
        <h1>Profil</h1>
        <div className="profile-info">
          <h1>shulyN'</h1>
          <span>Team</span>
          <div className="team">
            <img src="https://via.placeholder.com/100" />
            <span>teamname</span>
          </div>
          <span>Country</span>
          <div className="country">
            <img src="https://via.placeholder.com/100" />
            <span>countryname</span>
          </div>
        </div>
        <h1 style={{ marginTop: 16 }}>Historie zápasů</h1>
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
