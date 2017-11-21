// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component{
  keyListener = () => console.log('Entering password...')

  render() {
    return (
      <div>
      <input
      type="password"
      onKeyUp={this.keyListener}
      />
      </div>
    )
  }
}

export default Keypad;
