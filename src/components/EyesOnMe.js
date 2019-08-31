// Code EyesOnMe Component Here
// Code Keypad Component Here
import React, { Component } from 'react';
// import  from './';



export default class EyesOnMe extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  focus = () => {
    console.log('Good!')
  }

  blur = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <div className="">
        <button onFocus={this.focus} onBlur={this.blur}> </button>
      </div>
    )
  }
}
