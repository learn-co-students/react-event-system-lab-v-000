// Code Keypad Component Here
import React from 'react';


var timeout = null;

class Keypad extends React.Component {

  constructor() {
    super();
    this.timeout = 0;
  }

  onKeyUpFunction = (e) => {
      console.log('Entering password...');
    }

  render() {
    return (
      <input type="password" onKeyUp={this.onKeyUpFunction}></input>
    )
  }

}


export default Keypad;
