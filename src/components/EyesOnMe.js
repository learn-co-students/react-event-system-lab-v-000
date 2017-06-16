import React from 'react';

export default class EyesOnMe extends React.Component {

  theFokus = () => {
    console.log("Good!");
  }

  theBlur = () => {
    console.log("Hey! Eyes on me!");
  }

  render() {
  return (
      <button onBlur={this.theBlur} onFocus={this.theFokus}>eyez</button>
  )
}
}
