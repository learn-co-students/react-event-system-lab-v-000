import React from 'react'

class Keypad extends React.Component {
  keyEnter = () => {
    console.log('Entering password...')
  }
  render () {
    return (
      <input onKeyUp={this.keyEnter} type="password" />
    )
  }
}

export default Keypad
