import React from 'react';

export default class Keypad extends React.Component {

  keyUpEvent = () => {
    console.log('Entering password...')
  }
  render() {
    return (
      <input onKeyUp={this.keyUpEvent} type="password" />
    )
  }
}