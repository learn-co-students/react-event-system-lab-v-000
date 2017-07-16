import React from 'react';
 
class Keypad extends React.Component { 
 
  key = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type="password" onKeyUp={this.key}/>
    )
  }
}
 
export default Keypad;

