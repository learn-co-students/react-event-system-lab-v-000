// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{

  passwordLog = () => {
    console.log("Entering password...")
  }

  render(){
    return(
      <div>
        <input type="password"
          onKeyUp={this.passwordLog}
        />
      </div>
    )
  }

}

export default Keypad