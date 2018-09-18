import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  focusMessage = () => console.log(`Good!`)
  blurMessage = () => console.log(`Hey! Eyes on me!`)

  render() {
    return (
      <button
        onFocus= {this.focusMessage}
        onBlur= {this.blurMessage}>
      </button>
    )
  }
}
