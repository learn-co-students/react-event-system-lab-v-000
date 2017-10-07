// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  password = () => {
    console.log('Entering password...');
  }


  render() {
    return (
      <div>
      <form >
        Enter password:<br></br>
      <input type="password" name="password" onKeyUp={this.password}></input>
      </form> 
      </div>
    )
  }
}

export default Keypad
