// Code EyesOnMe Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class EyesOnMe extends React.Component {
  printGood = (event) => {
    console.log("Good!")
  }

  printEyes = (event) => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.printGood} onBlur={this.printEyes} ></button>
    )
  }
};