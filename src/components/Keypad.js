// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component{

  typing = () => {
    console.log("Entering password...")
  }

  render(){
    return (
      <div>
        <input onKeyUp={this.typing} type="password" />
      </div>
    )
  }
}

export default Keypad