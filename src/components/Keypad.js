// Code Keypad Component Here
import React, { Component } from 'react';


export deafult class Keypad extends Component {
  enterPassword = () => {
    console.log("Entering Password...")
  }


  render () {
    return (
      <div>
      <input
      type="password"
      onKeyUp={this.enterPassword} />
      </div>
      )
  }
}


