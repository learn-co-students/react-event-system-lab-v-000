// Code Keypad Component Here
// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

  handleKeyUp = () => { console.log('Entering password...') }

  render(){
    return(
      <div id='input'><input type="password" onKeyUp={this.handleKeyUp}/></div>
  )
}
}
