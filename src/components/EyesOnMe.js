import React from 'react';

export default class EyesOnMe extends React.Component {
  good = () => console.log('Good!');
  eyesUp = () => console.log('Hey! Eyes on me!')
  render() {
    return (
      <button onBlur={this.eyesUp} onFocus={this.good}>Eyes on Me</button>
    );
  }
}
