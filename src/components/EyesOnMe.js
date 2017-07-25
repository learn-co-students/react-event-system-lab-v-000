import React from 'react';

class EyesOnMe extends React.Component {
  constructor() {
    super()
  }

carrot = () => {
    console.log('Good!');
  }

  stick = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.carrot} onBlur={this.stick}>

      </button>
    )
  }
}

export default EyesOnMe;
