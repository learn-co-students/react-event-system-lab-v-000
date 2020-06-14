import React, { Component } from 'react';

export default class Keypad extends Component {
  keyUpEvent = () => {
    console.log('Entering password...');
  }
  render(){
    return(
      <input onKeyUp={this.keyUpEvent} type="password" />
    )
  }
}
