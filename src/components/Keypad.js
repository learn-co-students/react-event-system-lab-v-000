import React from 'react';

class Keypad extends React.Component {
  printEvent = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input onKeyUp={this.printEvent} type="password" />
    );
  }
}

export default Keypad;
