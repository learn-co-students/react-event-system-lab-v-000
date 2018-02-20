// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  make_password = () => {
    console.log('Entering password...');
  }

  render(){
    return(
      <input type="password" onKeyUp={this.make_password}/>
    )
  }
}

export default Keypad
