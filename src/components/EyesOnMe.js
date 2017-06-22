import React from 'react';

class EyesOnMe extends React.Component {

  focussy = () => {
    console.log('Good!');
  }

  blurry = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.focussy} onBlur={this.blurry}>Click me</button>
    );
  }
}

export default EyesOnMe;
