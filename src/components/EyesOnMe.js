// Code EyesOnMe Component Here

import React, { Component } from 'react'

export default class EyesOnme extends Component {

  focus = () => console.log('Good!')
  blur = () => console.log('Hey! Eyes on me!')


  render() {
    return (
        <button
          onFocus={this.focus}
          onBlur={this.blur}>
          Enter
        </button>
    )
  }
}
