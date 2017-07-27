import React from 'react';

class EyesOnMe extends React.Component {
  focusEvent = () => {
    console.log('Good!');
  }

  blurEvent = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.focusEvent} onBlur={this.blurEvent}>Click me</button>
    );
  }
}

export default EyesOnMe;
