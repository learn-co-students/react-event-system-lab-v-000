// Code Keypad Component Here
import React, { Component } from 'react';
// import  from './';



export default class Keypad extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }



  render() {
    return (
      <div className="">
        <input type="password" onKeyUp={console.log("Entering password")}/>
      </div>
    )
  }
}
