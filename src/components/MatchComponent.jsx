import React from "react";
import { Link } from "react-router-dom";

export default class MatchComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link
        to={`/match/${this.props.matchData.id}`}
        className="flex flex-col justify-center gap-y-4 bg-secondary p-4 shadow-inner rounded-2xl"
      >
        {this.props.matchData.teams[0].players.map((e) => {
          return (
            <div
              className="flex flex-row justify-center items-center gap-x-3"
              key={e.id}
            >
              <img
                src={`http://jnt.wbgl.eu/api/${this.props.matchData.teams[0].team_logo}`}
                width={32}
                height={32}
              />
              <img
                src={`http://jnt.wbgl.eu/api/${e.user_photo}`}
                width={32}
                height={32}
              />
              <span>{e.username}</span>
            </div>
          );
        })}
        <h1 className="font-medium text-2xl text-center drop-shadow-lg shadow-black">
          VS
        </h1>
        {this.props.matchData.teams[1].players.map((e) => {
          return (
            <div
              className="flex flex-row justify-center items-center gap-x-3"
              key={e.id}
            >
              <img
                src={`http://jnt.wbgl.eu/api/${this.props.matchData.teams[1].team_logo}`}
                width={32}
                height={32}
              />
              <img
                src={`http://jnt.wbgl.eu/api/${e.user_photo}`}
                width={32}
                height={32}
              />
              <span>{e.username}</span>
            </div>
          );
        })}
      </Link>
    );
  }
}
