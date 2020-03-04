// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  blur = () => {
    console.log("Hey! Eyes on me!");
  }
  focus = () => {
    console.log("Good!");
  }

  render() {
    return (
      <div>
        <button onBlur={this.blur} onFocus={this.focus}></button>
      </div>
    )
  }
}

export default EyesOnMe;
