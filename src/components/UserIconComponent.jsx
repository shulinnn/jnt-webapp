import React from "react";
export default class UserIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="rounded-full w-6 h-6 bg-secondary bg-center bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(http://jnt.wbgl.eu/api/${
            JSON.parse(localStorage.getItem("user_data")).user_photo
          })`,
        }}
      ></div>
    );
  }
}
