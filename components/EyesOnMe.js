import React from 'react';
import ReactDOM from 'react-dom';

export default class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.eyes = this.eyes.bind(this);
    this.me = this.me.bind(this);
  }

  eyes(){
    console.log("Good!");
  }

  me(){
    console.log("Hey! Eyes on me!");
  }

  render(){
    return(
      <div>
        <button onFocus={this.eyes} onBlur={this.me}>Click me</button>
      </div>
    );
  };
}
