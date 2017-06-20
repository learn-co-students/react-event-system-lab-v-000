import React from 'react';

class Keypad extends React.Component { 

	keyed = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type="password" onKeyUp={this.keyed}/>
    );
   }
}
 
export default Keypad;