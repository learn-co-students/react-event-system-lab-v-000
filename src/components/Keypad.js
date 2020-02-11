import React, { Component } from 'react';

export default class Keypad extends Component {

  keyUpHandler = () => (
    console.log("Entering password...")
  )

  render() {
    return (
      <div>
        <input onKeyUp={this.keyUpHandler} type="password" />
      </div>
    )
  }

}
