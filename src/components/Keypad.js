import React from 'react';

class Keypad extends React.Component {
 
  keyStroke = () => console.log('Entering password...');
  
 
  render() {
    return (
    	<div>
      <input type="password" 
      onKeyUp={this.keyStroke}/>
      </div>
    );
  }
}


export default Keypad