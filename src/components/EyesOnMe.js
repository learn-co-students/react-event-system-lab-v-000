// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {

  stayOnTarget = () => {
    console.log('Good!');
  }

  dontLoseIt = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.stayOnTarget} onBlur={this.dontLoseIt} />
    );
  }
}
