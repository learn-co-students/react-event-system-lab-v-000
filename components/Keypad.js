import React from 'react'

class Keypad extends React.Component {
  constructor() {
    super();

    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword() {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handlePassword}/>
      </div>
    );
  }
}

module.exports = Keypad;