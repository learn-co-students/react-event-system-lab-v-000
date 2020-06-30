// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    eyesOn = () => {
        console.log('Good!');
      }

      eyesOff = () => {
        console.log('Hey! Eyes on me!');
      }
     


    render() {
        return (
          <button onFocus={this.eyesOn} onBlur={this.eyesOff}> Eyes on me?</button>
        );
      }
    
}