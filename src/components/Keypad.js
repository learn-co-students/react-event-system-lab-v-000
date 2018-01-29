// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

  handleOnKeyUp = () => {
    console.log('Entering password...');
  }

  render() {
    return (
        <input type="password" onKeyUp={this.handleOnKeyUp} />
    )
  }
}

export default Keypad;
