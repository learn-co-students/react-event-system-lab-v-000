import React from 'react';

class EyesOnMe extends React.Component {

  buttonBlur = () => {
    console.log('Hey! Eyes on me!');
  }

  buttonFocus = () => {
    console.log('Good!');
  }

  render() {
    return ( <button onFocus={this.buttonFocus} onBlur={this.buttonBlur}>Button</button> );
  }

}

export default EyesOnMe;
