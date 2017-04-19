import React from 'react';

export default class EyesOnMe extends React.Component {
  constructor() {
     super();

     this.focus = this.focus.bind(this);
     this.blurs = this.blurs.bind(this);
  }

  focus() {
    console.log('Good!');
  }

  blurs() {
    console.log('Hey! Eyes on me!');
  }


  render() {
    return(
      <div>
        <button onFocus={this.focus} onBlur={this.blurs} > </button>
      </div>
      )
  }
}