// Code Keypad Component Here
import React from 'react'

class KeyPad extends React.Component {

  keyUp = () => console.log('Entering password...')

  render() {
    return(
        <input type='password' onKeyUp={this.keyUp} />
    )
  }
}

export default KeyPad

