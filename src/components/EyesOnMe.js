import React from 'react';

export default class EyesOnMe extends React.Component {

  focus = () => console.log('Good!');
  blur = () => console.log('Hey! Eyes on me!');



  render () {
    return (
      <div>
        <button onFocus={this.focus} onBlur={this.blur}> CLICK ME </button>
      </div>
    );
  }
}
