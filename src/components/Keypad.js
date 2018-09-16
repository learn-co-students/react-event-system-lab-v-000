// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

  passwordEntry = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <label>
      Password:
      <input type="password" onKeyUp={this.passwordEntry}/>
      </label>
    )
  }
}
