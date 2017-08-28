import React from 'react';

export default class EyesOnMe extends React.Component {
  // constructor() {
  //   super();
  //
  //   this.onBlur = this.onBlur.bind(this);
  //   this.onFocus = this.onFocus.bind(this);
  // }
  //
  // onBlur() {
  //   console.log('Hey! Eyes on me!')
  // };
  //
  // onFocus() {
  //   console.log('Good!')
  // };

  onFocus = () => {
    console.log('Good!');
  }

  onBlur = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onBlur={this.onBlur} onFocus={this.onFocus}>Eyes on me, please!</button>
    );
  }
}
