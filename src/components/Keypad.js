import React from 'react'

export default class Keypad extends React.Component {
   enterMessage = () => {
    console.log("Entering password...");
  }

  render() {
    return (
      <input onKeyUp={this.enterMessage} type="password" />
    )
  }

}
