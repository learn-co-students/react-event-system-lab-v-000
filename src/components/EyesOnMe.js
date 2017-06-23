// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
  blurEvent = () => {
    console.log("Hey! Eyes on me!")
  }
  focusEvent = () => {
    console.log("Good!")
  }

  render() {
    return (
      <button onFocus={this.focusEvent} onBlur={this.blurEvent} ></button>
    )
  }
}
