import React from "react";
import { Link } from "react-router-dom";

import BadgeComponent from "../components/BadgeComponent";
export default class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col bg-secondary rounded-2xl p-4">
        <div className="flex flex-row gap-x-2 items-center h-auto">
          <Link to={`/team/${this.props.teamId}`}>
            <img
              style={{ width: 32, height: 32 }}
              src={`http://jnt.wbgl.eu/api/${this.props.senderTeam}`}
            />
          </Link>
          <img
            src={`http://jnt.wbgl.eu/api/${this.props.senderPhoto}`}
            style={{ width: 24, height: 24 }}
          />
          <Link to={"/profile/" + this.props.playerId}>
            {this.props.senderName}
          </Link>
          <div className="flex flex-row gap-x-0">
            {this.props.badges.map((e, i) => (
              <BadgeComponent className="text-xs" color={e.badge_color} key={i}>
                {e.badge_name}
              </BadgeComponent>
            ))}
          </div>
        </div>
        <div className="inline-flex text-base mt-3">{this.props.message}</div>
      </div>
    );
  }
}
