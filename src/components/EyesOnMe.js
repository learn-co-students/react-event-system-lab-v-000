// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

  focusGood = () => {
    console.log("Good!")
  }

  blurHey = () => {
    console.log("Hey! Eyes on me!")
  }
  render() {
    return (
      <div>
        <button onBlur={this.blurHey} onFocus={this.focusGood}>Button</button>
      </div>
    )
  }
}
