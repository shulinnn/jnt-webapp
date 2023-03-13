import React from "react";
export default class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col bg-secondary rounded-2xl p-4">
        <div className="flex flex-row gap-x-2 items-center">
          <img
            style={{ width: 16, height: 16 }}
            src={`http://jnt.wbgl.eu/api/${this.props.senderTeam}`}
          />
          <img
            src={`http://jnt.wbgl.eu/api/${this.props.senderPhoto}`}
            style={{ width: 16, height: 16 }}
          />
          <span>{this.props.senderName}</span>
        </div>
        <div className="inline-flex text-base mt-3">{this.props.message}</div>
      </div>
    );
  }
}
