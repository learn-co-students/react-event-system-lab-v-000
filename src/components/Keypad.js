// Code Keypad Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class Keypad extends React.Component {
  print = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type='password' onKeyUp={ this.print }/>
    )
  }
}

export default Keypad;