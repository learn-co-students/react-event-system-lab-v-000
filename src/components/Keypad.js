// Code Keypad Component Here
import React, {Component} from 'react'

export default class Keypad extends Component{

  handleKeyDown = () => console.log("Entering password...")

  render(){
    return(
      <div>
        <input type="password" onKeyDown={this.handleKeyDown}/>
      </div>
    )
  }
}
