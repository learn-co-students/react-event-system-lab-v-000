// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
  focusing = () => {
    console.log('Good!')
  };
  blurring = () => {
    console.log('Hey! Eyes on me!')
  }
  render() {
    return (
      <div>
        <button onFocus={this.focusing} onBlur={this.blurring}>Are you focused?</button>
      </div>
    )
  }
}