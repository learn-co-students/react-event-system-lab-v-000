// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  listen = () => {
    console.log("Entering password...")
  }

  render(){
    return (
      <div>
        <input type='password' onKeyUp={this.listen} />
      </div>
    )
  }
}

export default Keypad;
