// Code Keypad Component Here
import React from 'react';


export default class Keypad extends React.Component{

  render(){
    return(
      <div>
      <input onKeyUp={this.password} type="password" />
      </div>
    )

    }
    password = () =>{
      console.log("Entering password...")
    }

  }
