// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
  myBlur = () => {
    console.log("Hey! Eyes on me!")
  }

  myFocus = () => {
    console.log("Good!")
  }

  render() {
    return <button onBlur={this.myBlur} onFocus={this.myFocus}>Eyes on me</button>
  }
}