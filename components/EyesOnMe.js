import React from 'react';

class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.goodMessage = this.goodMessage.bind(this);
    this.eyesMessage = this.eyesMessage.bind(this);
  };


  goodMessage() {
    console.log('Good!');
  }

  eyesMessage() {
    console.log('Hey! Eyes on me!');
  };

  render() {
    return(
      <button onFocus={this.goodMessage} onBlur={this.eyesMessage}>
        Eyes On Me!
      </button>
    );
  }
}

export default EyesOnMe

