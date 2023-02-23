import React from "react";
export default class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <div className="name">
          <img src="https://via.placeholder.com/32" />
          <img src="https://via.placeholder.com/32" />
          <span>playername</span>
        </div>
        <div className="textMsg">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec quis
          nibh at felis congue commodo. Nullam faucibus mi quis velit. Fusce
          tellus odio, dapibus id fermentum quis, suscipit id erat. Etiam neque.
          Praesent vitae arcu tempor neque lacinia pretium.
        </div>
      </div>
    );
  }
}
