import React from 'react';

class Keypad extends React.Component {

  handleKeyup = () => {
    console.log('Entering password...')
  }
  render(){
    return (
      <input onKeyUp={this.handleKeyup} type='password' />
    )
  }
}

export default Keypad
