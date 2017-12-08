// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

  // handleInputPassword = () => console.log('Entering password...')

  keyUp = () => {
      console.log('Entering password...');
    }

    render() {
      return (
        <div> <input type="password" onKeyUp={this.keyUp} /></div>
      );
    }
  }

export default Keypad;
