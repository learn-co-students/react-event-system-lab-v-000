import React from 'react';

export default class Keypad extends React.Component {
  constructor() {
    super();

    this.passwordInput = this.passwordInput.bind(this);
  }

  passwordInput() {
    console.log('Entering password...');
  }


  render() {
    return(
      <div>
        <input type="password" onKeyUp={this.passwordInput}></input>
      </div>
      )
  }
}