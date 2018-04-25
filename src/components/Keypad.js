import React from 'react';

class Keypad extends React.Component {
  passcode = () => console.log("Entering password...")
  render() {
    return(
      <input onKeyUp={this.passcode} type='password' />
    )
  }
}

export default Keypad;
