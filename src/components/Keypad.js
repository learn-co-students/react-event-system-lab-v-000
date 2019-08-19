// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component{

  passEvent = () => {
    console.log('Entering password...')
  }

  render(){
    return(
      <input onKeyUp={this.passEvent} type="password" />
    )
  }
}
