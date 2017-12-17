import React from 'react';
import PropTypes from 'prop-types';

export default class Keypad extends React.Component{
  password = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type = "password" onKeyUp= {this.password} />
    )
  }
}
