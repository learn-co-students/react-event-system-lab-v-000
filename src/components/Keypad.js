// Code Keypad Component Here
import React from "react";

export default class Keypad extends React.Component {
  enter = () => {
    console.log("Entering password...");
  };

  render() {
    return (
      <div>
        <input onKeyUp={this.enter} type="password" />
      </div>
    );
  }
}
