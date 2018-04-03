// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  inputtingPW = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type="password" onKeyUp={this.inputtingPW}/>
    )
  }
}

export default Keypad;
