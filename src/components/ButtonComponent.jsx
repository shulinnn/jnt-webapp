import React from "react";
export default class ButtonComponent extends React.Component {
  render() {
    return (
      <button className="button" type="submit">
        {this.props.text}
      </button>
    );
  }
}
