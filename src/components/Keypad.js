import React from 'react'

class Keypad extends React.Component {
  constructor (){
    super();
    this.passwordHandler = this.passwordHandler.bind(this)
  }

  passwordHandler(){
    console.log('Entering password...');
  }

  render(){
    return <input type="password" onKeyUp={this.passwordHandler}></input>
  }
}

export default Keypad