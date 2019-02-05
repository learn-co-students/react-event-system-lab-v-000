import React, { Component } from 'react'

export default class Keypad extends React.Component {
  constructor() {
    super()
  }

  keyUpListener = event => {
    console.log('Entering password...')
  }

  render() {
    return <input type="password" onKeyUp={this.keyUpListener} />
  }
}
