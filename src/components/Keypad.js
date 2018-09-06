// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

  handleKeyUp = () => {
    console.log("Entering password...");
  }
  
  render() {
    return(
      <p>Password: <input type="password" 
      onKeyUp={this.handleKeyUp}
      /> </p>
    );
  }
}
