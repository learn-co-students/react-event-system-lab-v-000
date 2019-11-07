import React from 'react';

class Keypad extends React.Component {

  takingInput = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input onKeyUp={this.takingInput} type="password" />
    );
  }
}

export default Keypad;