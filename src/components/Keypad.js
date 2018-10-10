// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
  
  handleKeyUp = (e) => {
    console.log('Entering password...')
  }  

  render() {
    return (
      <div>
           <input type="password" id="password" name="password" onKeyUp={this.handleKeyUp} />
      </div>
    )
  }
  
}
