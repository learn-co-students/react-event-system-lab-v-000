import React from 'react'

export default class Keypad extends React.Component {
  constructor(props) {
    super(props)
    this.takePassword = this.takePassword.bind(this)
  }

  takePassword() {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
      Password: <input type="password" onKeyUp={this.takePassword} />
      </div>
    )
  }
}
