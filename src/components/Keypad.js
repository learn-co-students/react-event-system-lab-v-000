// Code Keypad Component Here
import React, { Component } from 'react';


export default class Keypad extends Component {

  keyUpFunction = () => {
    return console.log('Entering password...')
  }

  render() {
    return (
      <div id="app">
        <input onKeyUp={this.keyUpFunction} type="password" />
      </div>
    )
  }

}
