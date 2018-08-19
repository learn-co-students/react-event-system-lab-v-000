// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
    
    // Function for writing to console
    enterPassword = () => {
        console.log('Entering password...')
    }
    
  render() {
    return (
      <div className="keypad">
        <form>
          <input type="password" onKeyUp={this.enterPassword}/>
        </form>
      </div>
    );
  }
}
