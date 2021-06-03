// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
  constructor() {
    super()
  }

  focusHandler() {
    console.log('Good!')
  }

  blurHandler() {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.focusHandler} onBlur={this.blurHandler}></button>
    )
  }

}