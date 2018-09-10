import React, { Component } from 'react';

export default class Keypad extends Component {

  passwordPrompt = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.passwordPrompt}></input>
    )
  }

}
