import React from 'react';

class EyesOnMe extends React.Component {

  message = () => {
    console.log('Good!');
  }

  text = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.message} onBlur={this.text}>Keep your eyes on me.</button>
    );
  }
}

export default EyesOnMe;
