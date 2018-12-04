// Code EyesOnMe Component Here
import React, { Component } from 'react'
export default class EyesOnMe extends Component {


  focus = (event) => {
    console.log("Good!")
  }

  blur = (event) => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <button
      onBlur={this.blur}
      onFocus={this.focus}>
      </button>
    )
  }
}
