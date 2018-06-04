// src/components/ToggleButton.js
import React from 'react';

class Keypad extends React.Component {
  logPassword = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input onKeyUp={this.logPassword} type="password"></input>
    )
  }
}

export default Keypad;// Bomb Component Code Goes Here
// Code Keypad Component Here
