// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component{
  handleinput = () => console.log('Entering password...');
  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleinput}/>
      </div>
    )
  }
}

export default Keypad;
