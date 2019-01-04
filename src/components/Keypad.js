// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

  render() {
    return (
      <input type="password" onKeyUp={this.handleKey}/>
    )
  }

  handleKey = () => {
    console.log("Entering password...")
  }


}
