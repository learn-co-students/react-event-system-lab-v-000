// Code Keypad Component Here

import React, { Component } from 'react';

class Keypad extends Component {

  enteringPassword = () => {
    console.log('Entering password...');
  }

  render(){
    return (
      <input onKeyUp={this.enteringPassword} type="password" />
    );
  }
}

export default Keypad;
