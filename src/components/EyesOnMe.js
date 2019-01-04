// Code EyesOnMe Component Here

import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  render() {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}> </button>
    )
  }

  handleFocus = () => {
    console.log("Good!")
  }

  handleBlur = () => {
    console.log("Hey! Eyes on me!")
  }

}
