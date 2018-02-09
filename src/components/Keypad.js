// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {

  popUp = () => {
    console.log("Entering password...");
  }

  render () {
    return (
      <div>
        <input type="password" onKeyUp={this.popUp}/>
      </div>
    )
  }
}
