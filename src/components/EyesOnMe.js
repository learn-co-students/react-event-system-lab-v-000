// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
  focusMessage = () => {
    console.log('Good!');
  }

  blurMessage = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.focusMessage} onBlur={this.blurMessage}>Club button</button>
    );
  }
}
