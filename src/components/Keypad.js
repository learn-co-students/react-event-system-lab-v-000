// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

  p = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.p} />
    )
  }
}

export default Keypad;
