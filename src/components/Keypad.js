// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

  printEnter = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.printEnter} type="password" />
    );
  }

}

export default Keypad;
