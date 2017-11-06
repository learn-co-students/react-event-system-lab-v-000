import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class EyesOnMe extends Component {
  look = () => console.log('Hey! Eyes on me!')
  good = () => console.log('Good!')

  render(){
    return(
      <button onBlur={this.look} onFocus={this.good} />
    )
  }
};

export default EyesOnMe;