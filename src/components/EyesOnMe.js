// Code EyesOnMe Component Here
import React from 'react';
import ReactDOM from 'react-dom';
class EyesOnMe extends React.Component {
  blur = () => {
    console.log('Hey! Eyes on me!')
  }

  focus = () => {
    console.log('Good!')
  }

  render() {
    return(
      <div>
      <button onFocus={this.focus} onBlur={this.blur} > </button>
      </div>
    );
  }
}

export default EyesOnMe;