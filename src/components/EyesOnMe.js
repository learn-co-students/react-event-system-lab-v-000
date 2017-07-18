import React from 'react';

export default class EyesOnMe extends React.Component {
  focusOn = () => {
    console.log('Good!');
  }

  blurIt = () => {
    console.log('Hey! Eyes on me!');
  }

 
render() {
  return (
    <button onFocus={this.focusOn} onBlur={this.blurIt}>Holaaaaa!</button>
  );
}
}
