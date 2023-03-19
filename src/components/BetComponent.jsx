import React from "react";
import { Link } from "react-router-dom";

export default class Bet extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTeam = (tId) => {
    if (this.props.matchData != null) {
      return (
        <div className="flex flex-row gap-x-2 items-center">
          <img
            src={`http://jnt.wbgl.eu/api/${this.props.matchData[tId].team_logo}`}
            width={32}
          />
          <span>{this.props.matchData[tId].team_name}</span>
        </div>
      );
    }
  };

  render() {
    return (
      <Link to={`/match/${this.props.matchId}`} className="w-full">
        <div className="flex flex-col bg-secondary p-4 rounded-2xl">
          <div className="flex flex-col justify-between items-center">
            {this.renderTeam(0)}
            <span>VS</span>
            {this.renderTeam(1)}
          </div>
          <div className="justify-center flex mt-8">
            {this.props.betAmount} WT
          </div>
        </div>
      </Link>
    );
  }
}

{
  /* <div className="flex flex-row gap-x-2 items-center" key={i}>
<img src={`http://jnt.wbgl.eu/api/${e.team_logo}`} width={32} />
<span>{e.team_name}</span>
</div>

<span key={i}>VS</span>
 */
}
