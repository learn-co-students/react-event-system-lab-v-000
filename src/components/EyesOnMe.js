// Code EyesOnMe Component Here
import React from 'react';
export default class EyesOnMe extends React.Component {
  tickle = () => {
     console.log('Good!');
   }

   fickle = () => {
      console.log('Hey! Eyes on me!');
    }

   render() {
     return (
       <button onFocus={this.tickle} onBlur={this.fickle}>Tickle me!</button>
     );
   }
 }
