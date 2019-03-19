// Code Keypad Component Here

import React from 'react';

class Keypad extends React.Component {

  handlePasswordInput = () => console.log('Entering password...')

  render () {
    return (
      <div>
        <input type="password" onKeyUp={this.handlePasswordInput} />
      </div>
    )
  }
}

export default Keypad;
