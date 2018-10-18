import React, { Component } from 'react';

export default class Keypad extends Component {

  keyup = () => {
    console.log("Entering password...")
    }
    
  render() {
    return(
      <div id="input">
        <input type="password" onKeyUp={this.keyup} />
      </div>
    )
  }
}
