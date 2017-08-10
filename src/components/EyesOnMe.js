// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  lookAtMe = () => {
    console.log("Good!")
  }
  distracted = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {

  return (
    <div id="button">
      <button onFocus={this.lookAtMe} onBlur={this.distracted}>Button</button>
    </div>
    )
  }
}

export default EyesOnMe
