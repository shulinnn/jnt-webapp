import React from "react";

export default class MatchComponent extends React.Component {
  render() {
    return (
      <div className="match">
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
      </div>
    );
  }
}
