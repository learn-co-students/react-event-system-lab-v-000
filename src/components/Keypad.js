import React, {Component} from 'react';

class Keypad extends Component {
  passwordEntry = () => console.log("Entering password...")
  
  render () {
    return (
      <input type="password" onKeyUp={this.passwordEntry} />
    )
  }
}

export default Keypad;