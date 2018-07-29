// Code EyesOnMe Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class EyesOnme extends React.Component {
  sayGood = () => {
    console.log('Good!');
    return;
  }
  getAttention = () => {
    console.log('Hey! Eyes on me!');
    return;
  }
  render(){
    return <button onFocus={this.sayGood} onBlur={this.getAttention}>Eyes on me</button>
  }
}
