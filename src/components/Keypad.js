import React, { Component } from 'react'

class Keypad extends Component {

  handleInputPassword = () => console.log('Entering password...')

  render(){
    return (
      <div>
        <input type="password" onKeyUp={this.handleInputPassword} ></input>
      </div>
    )
  }
}

export default Keypad
