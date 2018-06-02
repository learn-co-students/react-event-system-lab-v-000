import React from 'react';

class Keypad extends React.Component {
  listening = () => {
    console.log("Entering password...")
  }
  render(){
    return (
      <input type="password" onKeyUp={this.listening} />
    )
  }
}

export default Keypad;
