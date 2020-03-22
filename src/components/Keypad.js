import React, { Component } from "react";

export default class Keypad extends Component {
  constructor() {
    super();
  }

  handleKeyUp = _ => {
    console.log("Entering password...");
  };

  render() {
    return <input type="password" onKeyUp={this.handleKeyUp} />;
  }
}
