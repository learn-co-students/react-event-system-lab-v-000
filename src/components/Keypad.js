// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

  passwordDisplay = () => console.log("Entering password...")

  render () {
    return <input type="password" onKeyUp={this.passwordDisplay}></input>
  }
}

export default Keypad;