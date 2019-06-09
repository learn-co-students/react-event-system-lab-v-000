import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  isFocused = () =>  console.log('Good!')

  blur = () => console.log('Hey! Eyes on me!')
  
  render() {
    return (
      <div>
       <button onFocus={this.isFocused} onBlur={this.blur}> </button>
      </div>
    )
  }
}
