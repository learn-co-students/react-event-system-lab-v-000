// Code Keypad Component Here
import React from 'react';


class Keypad extends React.Component {
 
    keypad = () => {
      console.log('Entering password...');
    }
   
    render() {
      return (
        <input type="password" onKeyUp = {this.keypad} />
      );
    }
  }

  export default Keypad;