// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {
  
    handleIt = (event) => console.log("Entering password...")
    render() {
    return (
      <label>
        <input type="password" onKeyUp={this.handleIt} />
      </label>
    )
  }
}
