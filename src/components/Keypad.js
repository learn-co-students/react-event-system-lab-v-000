// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  keypad = () => {
    console.log('Entering password...')
  }
  render() {
    return (
      <div>
      <input type="password" onKeyUp= {this.keypad}/>
      </div>
    )
  }
}
export default Keypad
