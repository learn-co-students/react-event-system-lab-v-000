// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

  handleInput = () => {
    console.log('Entering password...')
  }  
   
    
  render() {
    return (
      <div>
        <input  
        type="password" 
        onKeyUp={this.handleInput}
        />  
      </div>
    )
  }
}

export default Keypad