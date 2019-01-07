import React, {Component} from 'react';

export default class Keypad extends Component {

  enterPassword = () => {
    console.log("Entering password...");
  }

  render() {
    return (
      <div>
        <label>Enter Password:</label>
        <input onKeyUp={this.enterPassword} type="password"/>
      </div>
    )
  }

}
