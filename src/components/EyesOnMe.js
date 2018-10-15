// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends React.Component {
  focusEvent = (event) => {
    console.log('Good!')
  }

  blurEvent = (event) => {
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(
      <button onFocus={this.focusEvent} onBlur={this.blurEvent}></button>
    )
  }
}
