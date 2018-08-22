// Code EyesOnMe Component Here
import React from "react";

class EyesOnMe extends React.Component {
  onFocusEvent = () => {
    console.log("Good!");
  };

  onBlurEvent = () => {
    console.log("Hey! Eyes on me!");
  };

  render() {
    return <button onFocus={this.onFocusEvent} onBlur={this.onBlurEvent} />;
  }
}

export default EyesOnMe;
