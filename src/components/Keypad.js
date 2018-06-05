// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

  keypadPassword = () => console.log('Entering password...')

    render() {
      return (
        <div>
          <input
            type="password"
            onKeyUp={this.keypadPassword}
            />
        </div>
      )
    }
  }

export default Keypad;
