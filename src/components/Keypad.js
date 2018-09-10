import React, { Component } from "react";

export default class Keypad extends Component {
  keyEvent = () => {
    console.log("Entering password...");
  };

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.keyEvent} />
      </div>
    );
  }
}
