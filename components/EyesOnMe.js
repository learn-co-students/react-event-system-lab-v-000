import React from 'react';
import ReactDOM from 'react-dom';

export default class EyesOnMe extends React.Component {
  constructor() {
    super();
    this.focus = this.focus.bind(this)
    this.blur = this.blur.bind(this)
  }
  focus() {
    console.log('Good!')
  }
  blur() {
    console.log('Hey! Eyes on me!')
  }
  render() {
    return (
      <button onFocus={this.focus} onBlur={this.blur}>Eyes on Me!</button>
    );
  }
}
