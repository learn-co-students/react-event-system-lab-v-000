// Code EyesOnMe Component Here

import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  isFocusing = () => {
    console.log("Good!");
  }
  isNotFocusing = () => {
    console.log("Hey! Eyes on me!");
  }
  render() {
    return (
      <button onFocus={this.isFocusing} onBlur={this.isNotFocusing}>Da Button</button>
    );
  }
}
