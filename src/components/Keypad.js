// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {

  handleKeyUp = () => console.log('Entering password...')

  render() {
    return (
      <input onKeyUp={this.handleKeyUp} type="password" />
    )
  }
}
