// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  action = () => {
    console.log('Entering password...');
  }
  render() {
    return (
      <div><input type="password" onKeyUp={this.action}/></div>
    )
  }
}

export default Keypad;
