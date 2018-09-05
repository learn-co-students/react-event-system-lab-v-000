// Code Keypad Component Here
import React from 'react'
 class Keypad extends React.Component {
  logPassword = () => {
    console.log('Entering password...')
  };
   render() {
    return(
      <div>
        <input onKeyUp={this.logPassword} type="password" />
      </div>
    )
  }
}
export default Keypad