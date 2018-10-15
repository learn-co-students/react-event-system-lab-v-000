import React from 'react';

class Keypad extends React.Component {

  password = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type="password" onKeyUp={this.password}>Type password.</input>
    );
  }
}

export default Keypad;
