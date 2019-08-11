import React, { Component } from 'react';

class EyesOnMe extends Component {
  handleFocus = () => console.log('Good!');
  handleBlur = () => console.log('Hey! Eyes on me!');

  render() {
    return <button onFocus={this.handleFocus} onBlur={this.handleBlur} />;
  }
}

export default EyesOnMe;
