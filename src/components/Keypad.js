// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {
  handleKeyPress() {
    console.log("Entering password...")
  }

  render() {
    return (
      <input onKeyUp={(e) => this.handleKeyPress(e)} type="password" />
    )
  }

}
