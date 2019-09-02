// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  entering = () => {
    console.log("Entering password...")
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.entering}/>
      </div>
    )
  }
}

export default Keypad;
