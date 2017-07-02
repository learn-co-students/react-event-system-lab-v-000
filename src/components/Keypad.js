import React from 'react'


class Keypad extends React.Component{

  constructor (){
    super()

    this.handleInput = this.handleInput.bind(this)
  }


  handleInput(){
    console.log('Entering password...');
  }

  render(){
    return (
      <input type="password" onKeyUp={this.handleInput} />
    )
  }
}


export default Keypad
