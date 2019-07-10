// Code Keypad Component Here
import React, { Component } from 'react';



export default class Keypad extends Component {

  keyPadListener = () => {
    console.log("Entering password...")
  }

  render() {
    return (
      <input onKeyUp={this.keyPadListener} type="password"/>
    )
  }

}
