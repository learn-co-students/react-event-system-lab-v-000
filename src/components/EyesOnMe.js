// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
  focusEventHandler = () => console.log("Good!");
  blurEventHandler = () => console.log("Hey! Eyes on me!");

  render() {
    return (
      <div>
        <button onFocus={this.focusEventHandler} onBlur={this.blurEventHandler} />
      </div>
    );
  }
}
