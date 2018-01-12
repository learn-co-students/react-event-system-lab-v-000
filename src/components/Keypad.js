import React from 'react';

class Keypad extends React.Component {
  
  keyUp = () => {
    console.log('Entering password...');
  }
  
  render() {
    return (
      <input type="password" onKeyUp={this.keyUp} />
    )
  }
}

export default Keypad;