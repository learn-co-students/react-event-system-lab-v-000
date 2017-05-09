import React from 'react';

export default class Keypad extends React.Component {
  constructor() {
    super();

    this.keyPad = this.keyPad.bind(this);
  }

  keyPad() {
    console.log('Entering password...');
  }

  render() {
    return (
      <input onKeyUp={this.keyPad} type="password" />
    );
  }
}
