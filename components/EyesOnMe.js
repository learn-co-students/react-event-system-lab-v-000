import React from 'react';

export default class EyesOnMe extends React.Component {
  focusHandler() {
    console.log("Good!");
  }

  blurHandler() {
    console.log("Hey! Eyes on me!");
  }

  render() {
    return (
      <button
        type="password"
        onFocus={this.focusHandler}
        onBlur={this.blurHandler} >
        All eyes on me!
      </button>
    );
  }
}
