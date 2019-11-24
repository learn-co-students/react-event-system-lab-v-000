import React, { Component } from 'react';

class EyesOnMe extends Component {

  onblur() {
    console.log("Hey! Eyes on me!")
  }

  onfocus() {
    console.log("Good!")
  }
  render() {
    return (
      <button onFocus={this.onfocus} onBlur={this.onblur}></button>
    );
  }
}

export default EyesOnMe;