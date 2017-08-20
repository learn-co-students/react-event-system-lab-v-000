import React from 'react';

class Keypad extends React.Component {

  passwordEntry = () => {
    console.log('Entering password...');
  }

  render() {
    return ( <input type='password' onKeyUp={this.passwordEntry} /> );
  }

}

export default Keypad;
