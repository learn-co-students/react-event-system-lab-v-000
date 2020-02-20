import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  congratulate = () => {
    console.log('Good!')
  }

  scrutinize = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.congratulate} onBlur={this.scrutinize}></button>
    )
  }
}
