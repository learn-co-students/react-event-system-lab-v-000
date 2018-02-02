import React from 'react';

export default class EyesOnMe extends React.Component {
  focusMsg = () => {
    console.log('Good!');
  }

  blurMsg = () => {
    console.log('Hey! Eyes on me!');
  }
  render() {
    return (
      <button onFocus={this.focusMsg} onBlur={this.blurMsg}></button>
    );
  }
}
