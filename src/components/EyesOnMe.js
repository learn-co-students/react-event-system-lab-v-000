// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  blurring = () => {
    console.log('Hey! Eyes on me!');
  }

  focusing = () => {
    console.log('Good!')
  }

  render(){
    return (
      <button onBlur={this.blurring} onFocus={this.focusing} ></button>
    )
  }
}

export default EyesOnMe;