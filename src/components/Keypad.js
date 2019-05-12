import React from 'react'

export default class Keypad extends React.Component{
  message = () => {
    console.log("Entering password...")
  }

  render(){
    return (
      <input type="password" onKeyUp={this.message}></input>
    );
  }
}
