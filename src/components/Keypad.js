import React, { Component } from 'react';

export default class Keypad extends Component {

  key = () => {
    console.log('Entering password...')
  }
  
  render() {
    return (
      <input type="password" onKeyUp={this.key}></input>
    )
  }
  
}