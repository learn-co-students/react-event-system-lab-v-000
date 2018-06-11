import React from 'react';

class Keypad extends React.Component {
  handleInputPassword = () => console.log("Entering password...")

  render() {
    return (
    <input type="password" onKeyUp={this.handleInputPassword}/>
  )
  }
}

export default Keypad;
