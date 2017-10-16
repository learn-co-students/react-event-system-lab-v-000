// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  keypadInput = () => {
    console.log('Entering password...')
  }
  render() {
    return(
      <input type="password" onKeyUp={this.keypadInput}></input>

    )
  }
}

export default Keypad;
