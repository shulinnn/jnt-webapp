import React from "react";
import Flag from "react-world-flags";

export default class RegisteredPlayer extends React.Component {
  render() {
    return (
      <div className="registered-player">
        <img src="https://via.placeholder.com/150" />
        <div className="bottom">
          <Flag code={"cz"} height={"14px"} />
          <span>name</span>
        </div>
      </div>
    );
  }
}
