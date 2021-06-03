// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {
  constructor() {
    super()
  }

  keyUpHandler() {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.keyUpHandler} type='password' />
    )
  }
}