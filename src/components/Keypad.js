import React from 'react';

export default class Keypad extends React.Component {
  render() {
    return(
      <input onKeyUp={this.keyUp} type='password' />
    )
  }

  keyUp = () => {
    console.log('Entering password...')
  }
}