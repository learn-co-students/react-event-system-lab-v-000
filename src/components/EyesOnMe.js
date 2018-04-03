// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  focusing = () => {
    console.log('Good!');
  }
  drifting = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.focusing} onBlur={this.drifting}>Eyes Up</button>
    )
  }
}

export default EyesOnMe;
