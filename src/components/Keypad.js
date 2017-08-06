import React from 'react';

class Keypad extends React.Component {

  password_entry = () => {
    console.log('Entering password...');
  }

  render() {
    return(
      <input type="password" onKeyUp={this.password_entry}/>
    )
  }
  
}


export default Keypad;