// Code Keypad Component Here
import React, { Component } from 'react'

export class Keypad extends Component {
  inputHandler = () => {
    console.log("Entering password...")
  }
  render() {
    return (
      <div>
        <input
          onKeyUp={this.inputHandler} 
          type="password"/>
      </div>
    )
  }
}

export default Keypad
