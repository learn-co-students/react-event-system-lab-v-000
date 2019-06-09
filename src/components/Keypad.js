import React, { Component } from 'react';

export default class Keypad extends Component {

  handleEvent = () =>  console.log('Entering password...')
  
  render() {
    return (
      <div>
       <input onKeyUp={this.handleEvent} type="password"/>
      </div>
    )
  }
}
