// Code EyesOnMe Component Here
//
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  goodHandler = () => {console.log('Good!')}

  heyHandler = () => {console.log('Hey! Eyes on me!')}

  render() {
    return (
      <button onFocus={this.goodHandler} onBlur={this.heyHandler}>Button</button>
    );
  }
}

