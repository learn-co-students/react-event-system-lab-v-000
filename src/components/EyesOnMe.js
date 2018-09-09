import React from "react";

class EyesOnMe extends React.Component {
  focus = () => {
    console.log("Good!");
  };

  blurred = () => {
    console.log("Hey! Eyes on me!");
  };

  render() {
    return <button onFocus={this.focus} onBlur={this.blurred} />;
  }
}

export default EyesOnMe;
