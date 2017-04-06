import React from 'react';

export default class EyesOnMe extends React.Component {
  constructor() {
    super();
    this.good = this.good.bind(this);
    this.bad = this.bad.bind(this);
  }

  good() {
    console.log('Good!');
  }

  bad() {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return(
      <button onFocus={this.good} onBlur={this.bad}>Eyes on me, please!</button>
    )
  }
}
