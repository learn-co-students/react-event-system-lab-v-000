// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  good = () => {
    console.log('Good!');
  }

  eyesonme = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.good} onBlur={this.eyesonme} />
    );
  }
}

export default EyesOnMe;
