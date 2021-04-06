import React, { Component } from "react"

export default class Keypad extends Component {
  render() {
    return (
      <input type="password" onKeyUp={(event)=> console.log("Entering password...")} />
    )
  }
}