// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  good = () => {
    console.log('Good!')
  }

  hey = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.good} onBlur={this.hey}></button>
    );
  }

}

export default EyesOnMe;
