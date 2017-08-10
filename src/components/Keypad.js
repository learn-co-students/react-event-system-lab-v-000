import React from 'react';

export default class Keypad extends React.Component {
  constructor() {
    super();

    this.passcode = this.passcode.bind(this);
  }

  passcode() {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.passcode} />
      </div>
    )
  }
}