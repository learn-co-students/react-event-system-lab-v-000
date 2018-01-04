// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component{
  keyPad = () => {
    console.log('Entering password...')
  }

  render(){
    return(

        <input onKeyUp = {this.keyPad} type="password">Enter</input>
     
    )
  }
}
