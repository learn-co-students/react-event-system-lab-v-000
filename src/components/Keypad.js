// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  handleOnKeyUp = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <form>
          <input type="password" onKeyUp={this.handleOnKeyUp}/>
        </form>
      </div>
    )
  }
}

export default Keypad;
