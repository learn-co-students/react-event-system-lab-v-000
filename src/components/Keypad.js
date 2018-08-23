import React, {Component} from 'react'

export default class Keypad extends Component {
  displayMessage = () => {
    console.log("Entering password...")
  }

  render() {
    return (
      <input type="password" onKeyUp={this.displayMessage}></input>
    )
  }
}
