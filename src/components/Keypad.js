import React, { Component } from 'react';

export default class Keypad extends Component {

  render() {
    return (
      <input type="password" onKeyUp={ (e) => console.log("Entering password...")}></input>
    )
  }
}
