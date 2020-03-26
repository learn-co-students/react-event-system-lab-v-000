// Code Keypad Component Here

import React, { Component } from 'react';



export default class Keypad extends React.Component{
  touchKey = () => {
    console.log('Entering password...')
  }
  render(){
    return(
    <div>
      <input onKeyUp={this.touchKey}
      type="password">
      Password</input>
    </div>
    )
  }
}
