import React from "react";
import { Link } from "react-router-dom";
export default class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col bg-secondary rounded-2xl p-4">
        <div className="flex flex-row gap-x-2 items-center">
          <Link to={`/team/${this.props.teamId}`}>
            <img
              style={{ width: 16, height: 16 }}
              src={`http://jnt.wbgl.eu/api/${this.props.senderTeam}`}
            />
          </Link>
          <img
            src={`http://jnt.wbgl.eu/api/${this.props.senderPhoto}`}
            style={{ width: 16, height: 16 }}
          />
          <Link to={"/profile/" + this.props.playerId}>
            {this.props.senderName}
          </Link>
        </div>
        <div className="inline-flex text-base mt-3">{this.props.message}</div>
      </div>
    );
  }
}
