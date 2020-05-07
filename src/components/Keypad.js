import React, { Component } from 'react'; 

export default class Keypad extends React.Component {
  render() {
    return(
        <input onKeyUp={this.handleKeyUp} type='password' /> 
    )
  }
  handleKeyUp = () => console.log('Entering password...')
} 