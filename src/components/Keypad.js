// Code Keypad Component Here
import React, { Component } from 'react';
// import  from './';



export default class Keypad extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  keyUp = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div className="">
        <input type="password" onKeyUp={this.keyUp}/>
      </div>
    )
  }
}
