// Code Keypad Component Here
import React from 'react';


class Keypad extends React.Component {
  handleKeyUp = () => {
    console.log('Entering password...');
  }
  render() {
    return <input type="password" onKeyUp={this.handleKeyUp} />
  }
}

export default Keypad;
