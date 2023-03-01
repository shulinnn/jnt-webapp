import React from "react";

export default class MatchComponent extends React.Component {
  render() {
    return (
      <div className="flex flex-col justify-center gap-y-4 bg-secondary p-4 shadow-inner rounded-2xl">
        <div className="flex flex-row justify-center items-center gap-x-3">
          <img src="https://via.placeholder.com/32" />
          <img src="https://via.placeholder.com/32" />
          <span>playername</span>
        </div>
        <h1 className="font-medium text-2xl text-center drop-shadow-lg shadow-black">
          VS
        </h1>
        <div className="flex flex-row justify-center items-center gap-x-3">
          <img src="https://via.placeholder.com/32" />
          <img src="https://via.placeholder.com/32" />
          <span>playername</span>
        </div>
      </div>
    );
  }
}
