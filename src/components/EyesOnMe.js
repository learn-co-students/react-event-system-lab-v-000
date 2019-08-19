import React from 'react';

export default class EyesOnMe extends React.Component{

  focusEvent = () => {
    console.log('Good!')
  }

  blurEvent = () => {
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(
      <button onFocus={this.focusEvent} onBlur={this.blurEvent}>Button</button>
    )
  }
}
