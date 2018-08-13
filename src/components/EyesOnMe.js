import React, { Component } from 'react';

class EyesOnMe extends Component {
  
  render(){
    return <button onFocus={this.focusHandler} onBlur={this.blurHandler}>Eyes On Me</button>
  }

  focusHandler = () => {
    console.log('Good!')
  }

  blurHandler = () => {
    console.log('Hey! Eyes on me!')
  }
}

export default EyesOnMe;
