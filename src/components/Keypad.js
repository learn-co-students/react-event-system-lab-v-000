// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component{
  render(){
    return(
      <div>
      <label> Enter a password: </label>
      <input type="password" id="password" onKeyUp={this.handleKeyUp} name="password"></input>
      </div>
    )
  }

  handleKeyUp = (event) => {
    console.log('Entering password...')
  }
}
