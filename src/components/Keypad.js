import React from 'react'

class Keypad extends React.Component {
  passwordEvent = () => {
    console.log("Entering password...")
  }

  render() {
    return(
      <input onKeyUp={this.passwordEvent} type="password" />
    )
  }
}

export default Keypad
