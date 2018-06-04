// src/components/ToggleButton.js
import React from 'react';

class EyesOnMe extends React.Component {
  logFocus = () => {
    console.log('Good!');
  }

  logBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.logFocus} onBlur={this.logBlur}/>
    )
  }
}

export default EyesOnMe;// Bomb Component Code Goes Here
// Code Keypad Component Here
// Code EyesOnMe Component Here
