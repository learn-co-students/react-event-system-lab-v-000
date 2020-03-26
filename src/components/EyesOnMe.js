// Code EyesOnMe Component Here

import React, { Component } from 'react';


export default class EyesOnMe extends React.Component{
  focusMe = () => {
    console.log('Good!')
  }

  blur = () => {
    console.log('Hey! Eyes on me!')
  }

  render(){

    return(
        <button
        onFocus={this.focusMe}
        onBlur={this.blur}>
        </button>
    )

  }
}
