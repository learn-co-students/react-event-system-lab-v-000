import React from 'react'

class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.focus = this.onFocus.bind(this);
    this.blur = this.onBlur.bind(this);
  }

  onFocus() {
    console.log('Good!');
  }

  onBlur() {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.focus} onBlur={this.blur} >
        Eyes on me, please!
      </button>
    );
  }
}


export default EyesOnMe
