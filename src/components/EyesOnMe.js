// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends React.Component {

  blur = () => {
    console.log('Hey! Eyes on me!')
  }

  focus = () => {
    console.log('Good!')
  }

  render() {
      return (
        <button
        onFocus={this.focus}
        onBlur={this.blur}>

        </button>
      )
    }

}
