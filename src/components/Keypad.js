// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

  keypad = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input onKeyUp={this.keypad} type="password" />
    );
  }
}

export default Keypad;
