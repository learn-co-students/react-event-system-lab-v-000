// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

  startKey = () => {
    console.log("Entering password...")
  }

  render() {
    return (
      <input type="password" onKeyUp={this.startKey}></input>
    )
  }
}

export default Keypad;
