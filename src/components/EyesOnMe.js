import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  listenForFocus = () => (
    console.log('Good!')
  )

  listenForBlur = () => (
    console.log('Hey! Eyes on me!')
  )



  render() {
    return (
      <button
      onFocus={this.listenForFocus}
      onBlur={this.listenForBlur}
      >
      </button>
    )
  }

}
