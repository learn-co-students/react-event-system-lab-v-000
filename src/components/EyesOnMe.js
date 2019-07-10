// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  focusListener = () => {
    console.log("Good!")
  }

  blurListener = () => {
    console.log("Hey! Eyes on me!")
  }
   render() {
     return (
       <button onBlur={this.blurListener} onFocus={this.focusListener}>Are you Watching</button>
     )
   }
}
