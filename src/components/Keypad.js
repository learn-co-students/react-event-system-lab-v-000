// Code Keypad Component Here
import React from 'react';

class Keypad  extends React.Component {
  constructor(){
    super()
  }


password = () => {
  console.log('Entering password...');
}

  render() {
    return(
      <input onKeyUp={this.password} type="password" />
    );
  }
}


export default Keypad;
