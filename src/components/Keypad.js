// Code Keypad Component Here
// Code EyesOnMe Component Here
import React from 'react';

export default class Keypad extends React.Component{

        handleInputPassword =()=>{
          console.log('Entering password...')
        }

  render(){
    return (
      <div onFocus={this.good}>
      <input type="password" onKeyUp={this.handleInputPassword}/>
      </div>
      );
  }
}
