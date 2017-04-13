import React from 'react';

class Keypad extends React.Component {
  constructor() {
    super();

    this.password = this.password.bind(this);
  }

  password() {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.password}/>
      </div>
    )
  }
}


module.exports = Keypad;
