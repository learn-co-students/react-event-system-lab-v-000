// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {
  enterPw = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.enterPw} type="password" />
    )
  }
}
