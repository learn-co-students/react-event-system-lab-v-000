import React from 'react';

class EyesOnMe extends React.Component {
  
  input1 = () => {
    console.log('Good!');
  }

  input2 = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <div>
        <button onFocus={this.input1} onBlur={this.input2}></button>
      </div>
    );
  }
}

export default EyesOnMe;