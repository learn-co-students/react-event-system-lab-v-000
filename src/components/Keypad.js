// Code Keypad Component Here
import React from 'react';
class Keypad extends React.Component {

  input = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type="password" onKeyUp={this.input}/>
    );
  }
}
export default Keypad;
