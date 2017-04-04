import React from 'react';

class Keypad extends React.Component  {
  constructor() {
    super();

    this.getPassword = this.getPassword.bind(this)
  }

  getPassword() {
    console.log('Entering password...')
  }

  render()  {
    return (
        <input type="password" onKeyUp={this.getPassword}/>
      );
  }
}


module.exports = Keypad