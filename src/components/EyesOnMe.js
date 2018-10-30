import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  showFocus = () => (console.log("Good!"));
  showBlur = () => (console.log("Hey! Eyes on me!"));

  render() {
    return(
      <button onFocus={this.showFocus} onBlur={this.showBlur}/>
    )
  }
}
