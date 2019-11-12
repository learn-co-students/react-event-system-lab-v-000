import React, { Component } from 'react';

export default class Keypad extends Component {

  keyPressed = () => (
    console.log('Entering password...')
  )

  render () {
    return (
      <div>
        <input type="password" onKeyUp={this.keyPressed} ></input>
      </div>
    )
  }
}
