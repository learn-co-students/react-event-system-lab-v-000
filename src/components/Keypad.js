// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

  password = () => {
    console.log("Entering password...")
  }

  render() {
    return (
      <input onKeyUp={this.password} type="password">Enter password</input>
    )
  }
}


export default Keypad
