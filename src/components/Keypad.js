import React, { Component } from 'react';

export default class Keypad extends Component {

  handleKeyUp = () => {
    console.log('Entering password...')
  }


  render() {
    return (
      <div className="keypad">
        <input type="password"
               onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }
}
