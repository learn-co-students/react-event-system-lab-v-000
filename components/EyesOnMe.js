import React from 'react';

export default class EyesOnMe extends React.Component {
  constructor() {
    super()

    this.eyesOn = this.eyesOn.bind(this)
    this.eyesOff = this.eyesOff.bind(this)
  }

  eyesOn() {
    console.log('Good!')
  }

  eyesOff() {
    console.log('Hey! Eyes on me!')
  }


  render() {
    return(
      <button onFocus={ this.eyesOn } onBlur={ this.eyesOff }></button>
    )
  }
}