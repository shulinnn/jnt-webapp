import React from "react";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";

export default class RegisteredPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col gap-y-4 w-[45%] md:w-1/5 lg:w-auto">
        <Link to={`/profile/${this.props.userId}`}>
          <img
            style={{ width: 150, height: 150 }}
            src={`http://jnt.wbgl.eu/api/${this.props.photo}`}
          />
          <div className="flex flex-row gap-x-2 items-center">
            <Flag code={this.props.flag} height={"14px"} width={"20px"} />
            <span>{this.props.username}</span>
          </div>
        </Link>
      </div>
    );
  }
}
