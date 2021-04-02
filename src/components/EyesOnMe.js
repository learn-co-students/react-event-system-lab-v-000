import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  
  focusCallback = (e) => {
    console.log('Good!')
  }
  
  blurCallback = (e) => {
    console.log('Hey! Eyes on me!')
  }
  
  render(){
    return <button onFocus={this.focusCallback} onBlur={this.blurCallback} >Click me!</button>
  }
}
