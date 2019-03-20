// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  focusLog = () => {
    console.log('Good!')
  }

  blurLog = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return(
      <button onFocus={this.focusLog} onBlur={this.blurLog}></button>
    )
  }
}

export default EyesOnMe;
