import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  handleFocus = () => (
    console.log('Good!')
  )

  handleBlur = () => (
    console.log('Hey! Eyes on me!')
  )

  render () {
    return (
      <div>
        <button onFocus={this.handleFocus} onBlur={this.handleBlur} ></button>
      </div>
    )
  }
}
