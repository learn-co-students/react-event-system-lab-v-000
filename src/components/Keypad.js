// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
  enterPassword = () => {
    console.log('Entering password...')
  }
  render () {
    return (
      <input onKeyUp={this.enterPassword} type="password"></input>
    )
  }
}

export default Keypad;
