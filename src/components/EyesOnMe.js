// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends Component {
  focusEvent = () =>{
    return console.log("Good!")
  }
  blurEvent = () =>{
    return console.log("Hey! Eyes on me!")
  }
  render(){
    return (
      <button onFocus = {this.focusEvent} onBlur = {this.blurEvent}></button>
    )
  }
}
