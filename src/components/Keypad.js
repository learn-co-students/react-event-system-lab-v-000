import React from 'react'

class KeyPad extends React.Component{

  keyUpHandler = (event) => console.log("Entering password...")
  render(){
    return(
        <input onKeyUp={this.keyUpHandler} type="password" />
  )}
}

export default KeyPad
