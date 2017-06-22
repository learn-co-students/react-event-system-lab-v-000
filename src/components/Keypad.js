import React from 'react';
import ReactDOM from 'react-dom';

export default class Keypad extends React.Component{
  constructor(){
    super();
    this.answer = this.answer.bind(this);
  }

  answer(){
    console.log('Entering password...');
  }

  render(){
    return(
      <input type="password" onKeyUp={this.answer} />
    );
  }
}
