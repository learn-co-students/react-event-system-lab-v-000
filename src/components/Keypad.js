import React, { Component } from 'react';

export default class Keypad extends Component {

  handleKeyPress = () => (
    console.log('Entering password...')
  )

  render () {
    return (
      <div>
        <input type="password" onKeyUp={this.handleKeyPress} ></input>
      </div>
    )
  }
}
