// Code EyesOnMe Component Here

import React from 'react';

class EyesOnMe extends React.Component {

  goody = () => {
    console.log("Good!")
  }

  hey = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return(
      <button onFocus={this.goody} onBlur={this.hey}></button>
    )
  }
}

export default EyesOnMe
