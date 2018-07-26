import React from 'react';

class Keypad extends React.Component {

  submitPassword = () => {
    console.log('Entering password...');
  }

  render() {
    return <input onKeyUp={this.submitPassword} type="password" />
  }
}

export default Keypad;
