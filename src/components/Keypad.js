// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
    
    inputProcessing = () => {
        console.log("Entering password...")
    }
    
  render() {
    return (
      <div>
        <input 
          type="password"
          onKeyUp={this.inputProcessing} 
        />
      </div>
    )
  }
}

export default Keypad