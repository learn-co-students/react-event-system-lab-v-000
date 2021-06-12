// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
  
  constructor(props) {
    super(props)
  }
  
  handleKeyUp = () => {
    console.log('Entering password...')
  }

  render() {
    return (
        <input onKeyUp={this.handleKeyUp} type="password" />
    )
  }
  
}