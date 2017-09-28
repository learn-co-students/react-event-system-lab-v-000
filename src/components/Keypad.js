// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{

  enterPassword = () => console.log('Entering password...')
  render(){
    return (
      <input type="password" onKeyUp={this.enterPassword}/>
    )
  }
}
export default Keypad
