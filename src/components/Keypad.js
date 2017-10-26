// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {
  message = () => {
    console.log('Entering password...');
  }
  render() {
    return <input type="password" placeholder="Password" onKeyUp={this.message} />
  }
}
