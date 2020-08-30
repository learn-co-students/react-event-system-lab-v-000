import React, { Component } from 'react';

export default class Keyboard extends React.Component {


  typing = () => {
      console.log('Entering password...');
  }

  render() {
    return (
      <input type="password" onKeyUp={this.typing}></input>

    );
  }
}
