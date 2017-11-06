import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Keypad extends Component {
  msg = () => {console.log('Entering password...')}

  render(){
    return(
      <input type='password' onKeyUp={this.msg} />
    )
  }
};

export default Keypad;
