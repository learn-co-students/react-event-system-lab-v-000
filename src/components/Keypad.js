import React, { Component } from 'react';


export default class Keypad extends Component {

  constructor() {
    super()
  }

  handleKeyUp = () => {
    console.log('Entering password...')
  }


  render() {
    return (
      <input type="password"
      value="Submit"
      onKeyUp={this.handleKeyUp}>
      </input>
    )
  }
}
