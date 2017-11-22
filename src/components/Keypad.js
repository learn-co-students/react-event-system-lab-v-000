// Code Keypad Component Here
import React from'react'

class Keypad extends React.Component {
  codeInput = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type='password' onKeyUp={this.codeInput} />
    )
  }
}

export default Keypad