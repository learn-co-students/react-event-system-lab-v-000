import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  handleFocus = () => {
    console.log('Good!')
  }

  handleBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  handleClick = () => {
    console.log('Beep!')
  }

  render() {
    return(
      <button onFocus={this.handleFocus} onBlur={this.handleBlur} onClick={this.handleClick}>Boop</button>
    )
  }
}
