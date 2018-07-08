// Code Keypad Component Here
import React from 'react';
import ReactDOM from 'react-dom';
class Keypad extends React.Component {
  press = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      
      <input onKeyUp={this.press} type="password" name="password">Password</input>
    
    );
  }
}

export default Keypad;