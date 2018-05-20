import React from 'react'

class Keypad extends React.Component {
  passwordFocus = () => (console.log('Entering password...'))
  
  render() {
    return (
      <input type="password" onKeyUp={ this.passwordFocus } />
    );
  }
}

export default Keypad;
