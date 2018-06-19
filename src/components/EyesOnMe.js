import React from 'react';

export default class EyesOnMe extends React.Component {
  blrFunc = () => console.log('Hey! Eyes on me!');
  fcsFunc = () => console.log('Good!');
  render() {
    return (
      <button onBlur={this.blrFunc} onFocus={this.fcsFunc}></button>
    );
  }
}
