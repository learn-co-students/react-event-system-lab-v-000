// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

  handleClick = () => {
    console.log('Entering password...')
      }


  render() {
    return (
      <div>
        <input onKeyUp={this.handleClick} type="password" />
      </div>
    )
  }
}
