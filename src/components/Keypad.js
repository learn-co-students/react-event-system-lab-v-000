// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  keyup = () => {
    console.log("Entering password...")
  }
  render() {
    return(

      <div>
        <input type='password' onKeyUp={this.keyup}/>
      </div>

    )
  }
}

export default Keypad;
