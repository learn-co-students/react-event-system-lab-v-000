// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  goodLog = () => {
    console.log("Good!");
  }

  heyFocus = () => {
    console.log("Hey! Eyes on me!");
  }

  render() {
    return (
      <button onFocus={this.goodLog} onBlur={this.heyFocus}>Button</button>
    );
  }
}
export default EyesOnMe;
