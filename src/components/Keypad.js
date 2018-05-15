import React from 'react';

class Keypad extends React.Component {
  handleInput(){
    console.log('Entering password...')
  }
  render(){
    return <div> <input onKeyUp={this.handleInput} type="password"/></div>
  }
}

export default Keypad;
