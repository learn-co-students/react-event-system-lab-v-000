import React from 'react'

export default class Keypad extends React.Component {
  constructor() {
    super()

    this.enterPassword = this.enterPassword.bind(this)
  }

  enterPassword() {
    console.log("Entering password...")
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.enterPassword}></input>
      </div>
    )
  }
}
