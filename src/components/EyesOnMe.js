// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {

  onFocus = () => {
    console.log('Good!')
  }

  onBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <div>
        <button onFocus={this.onFocus} onBlur={this.onBlur}>Hey!</button>
      </div>
    )
  }
}
