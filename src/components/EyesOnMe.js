// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component{

  blurEvent = function () {
    console.log('Hey! Eyes on me!')
  };
  focusEvent = function () {
    console.log('Good!')
  };

  render(){
    return <button onBlur={this.blurEvent} onFocus={this.focusEvent} type="password"/>
  }
}

export default EyesOnMe
