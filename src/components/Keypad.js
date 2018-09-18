// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  render(){
    return <input id="password" type="password" onKeyUp={this.keyUpHandler} />
  }

  keyUpHandler = () => {
    console.log('Entering password...')
  }
}


export default Keypad