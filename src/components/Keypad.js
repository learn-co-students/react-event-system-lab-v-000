// Code Keypad Component Here

import React from 'react';

class Keypad extends React.Component {
  constructor(){
    super()

    this.handleInputPassword = this.handleInputPassword.bind(this);

  }

  handleInputPassword() {
    console.log('Entering password...');
  }

  render() {
    return (
      <div className="Keypad">
        <input type="password" onKeyUp={this.handleInputPassword} />
      </div>
    );
  }
}


export default Keypad