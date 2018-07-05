import React from 'react'

class Keypad extends React.Component {
  enteringPassword = () => {
    console.log("Entering password...")
  }

  render(){
    return(
      <input type="password" onKeyUp={this.enteringPassword}></input>
    )
  }
}

export default Keypad
