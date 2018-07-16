// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  passwordMessage = () => console.log("Entering password...")

  render() {
    return(
      <input type="password" onKeyUp={this.passwordMessage} />
    );
  }
}

export default Keypad;
