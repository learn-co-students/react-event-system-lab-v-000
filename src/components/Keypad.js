// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

     keyUp = function () {
      console.log('Entering password...')
    }

  render () {
    return (
        <input onKeyUp={this.keyUp} type="password"/>
    )
  }

}

export default Keypad
