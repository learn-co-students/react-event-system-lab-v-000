// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  pword = () => {
    console.log("Entering password...");
  }
  render () {
    return (
      <input type="password" onKeyUp={this.pword}/>
    );
  }
}

export default Keypad;
