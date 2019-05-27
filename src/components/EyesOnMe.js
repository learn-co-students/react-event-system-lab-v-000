import React, { Component } from 'react';

export default class EyesOnMe extends Component {

 callOtherFunctions = () => {
    this.blur
  }

  blur = () => {
     console.log('Hey! Eyes on me!');
   }

   focus = () => {
      console.log('Good!');
    }

   render() {
     return (
       <button onFocus={this.focus} onBlur={this.blur}>Button</button>
     // <button type="focus" onClick={this.focus}>Focus</button>
     );
   }
 }
