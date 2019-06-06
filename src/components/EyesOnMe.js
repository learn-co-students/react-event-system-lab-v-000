// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  focusHandle = () => {
    console.log("Good!")
  }

  blurHandle = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <div>
      <button
      onFocus={this.focusHandle}
      onBlur={this.blurHandle}>
      Hey, eyes on me please!
      </button>
      </div>
      )
  }

}