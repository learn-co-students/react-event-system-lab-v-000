import React from 'react';

export default class Keypad extends React.Component {
  constructor(props) {
    super();
    this.state = { secondsLeft: props.initialCount }
  }

  enteringPassword() {
    console.log('Entering password...')
  }

  render() {
    return (
    <input type="password" onKeyUp={this.enteringPassword}></input>
    )
  }
}
