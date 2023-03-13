import React from "react";
export default class ButtonComponent extends React.Component {
  render() {
    return (
      <button
        className="bg-secondary border-none p-4 font-light text-base text-white"
        type="submit"
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}
