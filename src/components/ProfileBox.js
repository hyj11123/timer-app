import React from "react";
import "../styles/profile.css";

class ProfileBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="p_box">
        <div>
          <img
            src={this.props.avatar}
            alt="profile"
            width="120px"
            height="120px"
          />
        </div>
        <div className="p_box__desc">
          <span>{this.props.name}</span>
          <span>{this.props.age}</span>
          <span>{this.props.school}</span>
          <span>{this.props.gender}</span>
        </div>
      </div>
    );
  }
}

export default ProfileBox;
