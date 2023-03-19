import React, { Children } from "react";
export default class BadgeComponent extends React.Component {
  render() {
    return (
      <span
        onClick={this.props.onClick}
        style={{
          marginBottom: 16,
          display: "inline",
          background: this.props.color,
        }}
        className="py-0 px-2 ml-[4px] mr-[4px] inline-flex justify-center shadow-lg rounded-2xl font-medium text-xs"
      >
        {this.props.children}
      </span>
    );
  }
}
