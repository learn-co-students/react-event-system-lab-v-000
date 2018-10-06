import React from 'react';

class Keypad extends React.Component {
  constructor() {
    super();

    this.handleInputPassword = this.handleInputPassword.bind(this);
  }

  handleInputPassword() {
    console.log('Entering password...');
  }

  render() {
    debugger
    return (
      <div>
        <input type="password" onKeyUp={this.handleInputPassword}/>
      </div>
    );
  }
}

export default Keypad;