import React from "react";
export default class Message extends React.Component {
  render() {
    return (
      <div className="flex flex-col bg-secondary rounded-2xl p-4">
        <div className="flex flex-row gap-x-2 items-center">
          <img src="https://via.placeholder.com/16" />
          <img src="https://via.placeholder.com/16" />
          <span>playername</span>
        </div>
        <div className="inline-flex text-base mt-3">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec quis
          nibh at felis congue commodo.
        </div>
      </div>
    );
  }
}
