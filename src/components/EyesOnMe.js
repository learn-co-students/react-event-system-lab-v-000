// Code EyesOnMe Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class EyesOnMe extends React.Component {
  onFocus = () => {
    console.log('Good!')
  }
  onBlur = () => {
    console.log('Hey! Eyes on me!')
  }
  render () {
    return (
      <div>
        <button onFocus={ this.onFocus } onBlur={ this.onBlur } >Focus </button>
      </div>
    )
  }
}
