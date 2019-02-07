// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

   focus = () => {
    console.log('Good!');
  }

   blur = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <div>
        <button onBlur={this.blur} onFocus={this.focus}>Press</button>
      </div>
    );
  }
}
export default EyesOnMe;
