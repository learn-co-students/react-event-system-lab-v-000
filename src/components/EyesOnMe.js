// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  focus = () => {
    console.log('Hey! Eyes on me!');
  }

  good = () => {
    console.log('Good!');
  }
  render() {
    return (
      <button onBlur={this.focus} onFocus={this.good}>Focus!</button>
    )
  }
}

export default EyesOnMe;
