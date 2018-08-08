// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  blur = () => {
    console.log("Hey! Eyes on me!")
  }

  focus = () => {
    console.log("Good!")
  }

  render() {
    return (
      <button onBlur={this.blur} onFocus={this.focus}>Eyes On Me</button>
    )
  }//end render



}//end export
