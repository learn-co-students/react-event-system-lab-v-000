// Code EyesOnMe Component Here
import React, { Component } from 'react';


export default class EyesOnMe extends Component {

  focusEventFn = () => {
    console.log('Good!')
  }
  blurEventFn = () => {
    console.log('Hey! Eyes on me!')
  }



  render () {
    return (
      <div>
        <button onFocus={this.focusEventFn} onBlur={this.blurEventFn}>
          Eyes On The Ball
        </button>
      </div>
    )
  }
}
