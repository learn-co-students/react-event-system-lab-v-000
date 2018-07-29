// Code Keypad Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Keypad extends React.Component {
  printMessage = () => {
    console.log('Entering password...');
    return;
  }
  render(){
    return <input type='password' onKeyUp={this.printMessage} />
  }
}
