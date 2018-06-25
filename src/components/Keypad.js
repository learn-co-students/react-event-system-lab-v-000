import React from 'react';

class Keypad extends React.Component {
  enteringPassword = () => {
    console.log('Entering password...')
  }
  render () {
    return (
      <input onKeyUp={this.enteringPassword} type="password" />
    )
  }

}

export default Keypad
