import React from 'react';

class EyesOnMe extends React.Component {
  good = () => {
    console.log('Good!');
  }

  askForEyes = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.good} onBlur={this.askForEyes}></button>
    )
  }
}

export default EyesOnMe;