// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  
  handleBlur = (e) => {
    console.log('Hey! Eyes on me!');
  }  

  handleFocus = (e) => {
    console.log('Good!');
  }  

  render() {
    return (
      <div>
        <button type="button" onBlur={this.handleBlur} onFocus={this.handleFocus}>
            Eyes On Me
        </button>
      </div>
    )
  }
  
}
