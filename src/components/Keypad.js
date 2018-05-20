// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
  password = () => {
    console.log('Entering password...')
  };

  render() {
    return(
      <div>
        <input onKeyUp={this.password} type="password" />
      </div>
    )
  }
}
export default Keypad
