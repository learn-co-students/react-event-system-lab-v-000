// Code Keypad Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Keypad extends React.Component {
  typing = () => {
    console.log('Entering password...');
  }
  render () {
    return (
      <div>
        <input type="password" onKeyUp={this.typing}></input>
      </div>
    )
  }
}
