import React from 'react'

export default class Keypad extends React.Component {
  constructor() {
    super()
    this.enteringPassword = this.enteringPassword.bind(this)
  }

  enteringPassword() {
    console.log("Entering password...")
  }

  render() {
    return (
      <div>
      <input type="password" onKeyUp={this.enteringPassword} />
      </div>
    )
  }
}
