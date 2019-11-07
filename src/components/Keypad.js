// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
  
  constructor(props){
    super(props)
    
    this.state = {
      
    }
  }
  
  keyUpHandler = () => {
    console.log('Entering password...')
  }
  
  render(){
    return (
      <input type="password" onKeyUp={this.keyUpHandler}  />
      )
  }
}