import React from 'react';

export default class EyesOnMe extends React.Component {

  focusing = () => {
    console.log('Good!');
  }

  drifting = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.focusing} onBlur={this.drifting}></button>
    );
  }
}
