import React, { Component } from "react";

class Keypad extends Component {
  keyup() {
    console.log("Entering password...");
  }

  render() {
    return (
      <div class="keypad-input">
        <input type="password" onKeyUp={this.keyup} />
      </div>
    );
  }
}

export default Keypad;
