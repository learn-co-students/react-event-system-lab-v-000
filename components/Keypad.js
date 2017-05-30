import React from 'react'

export default class Keypad extends React.Component {
  constructor() {
    super()
    this.input = this.input.bind(this)
  }

  input() {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.input} type="password">Password</input>
    )
  }
}
