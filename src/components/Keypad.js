// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  enteringPW = () => {
    console.log("Entering password...");
  }
  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.enteringPW}></input>
      </div>
    )
  }
}

export default Keypad;
