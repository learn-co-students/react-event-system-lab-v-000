import React, { Component } from 'react';

export default class Keypad extends Component {
  constructor() {
    super()
  }

  handleKeyUp = (event) => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleKeyUp} />
      </div>
    )
  }
}
