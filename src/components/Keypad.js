// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component{

  passwordText = function () {
    console.log('Entering password...')
  };

  render(){
    return <input onKeyUp={this.passwordText} type="password"/>
  }
}

export default Keypad
