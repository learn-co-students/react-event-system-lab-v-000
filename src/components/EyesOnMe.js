// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends Component {

  doOnBlur() {
    console.log("Hey! Eyes on me!")
  }

  doOnFocus() {
    console.log("Good!")
  }

  render () {
    return(
        <button onBlur={this.doOnBlur} onFocus={this.doOnFocus} />
    )
  }
}
