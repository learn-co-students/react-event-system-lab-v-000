import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  
  focusListener = () => (
    console.log('Good!')
  )

  blurListener = () => (
    console.log('Hey! Eyes on me!')
  )
  
  render() {
    return (
        <button onFocus={this.focusListener} onBlur={this.blurListener}></button>
    )
  }
  
}