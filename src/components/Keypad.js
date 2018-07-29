// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

  typing = () => {
  console.log('Entering password...');
}

  render(){
    return(
      <input type="password" onKeyUp={this.typing}>
      </input>
    )
  }
}

export default Keypad
