// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  onFocusClick = () => {
    console.log("Good!")
  }

  onBlurClick = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return(
      <button onFocus={this.onFocusClick} onBlur={this.onBlurClick}></button>
    )
  }
}

export default EyesOnMe;
