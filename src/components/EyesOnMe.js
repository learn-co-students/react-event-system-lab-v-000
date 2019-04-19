// Code EyesOnMe Component Here
import React from 'react';


export default class EyesOnMe extends React.Component {
  render(){
    return(
      <button onBlur={this.handleBlur} onFocus={this.handleFocus}>click me </button>
    )
  }

  handleBlur = () =>{
    console.log('Hey! Eyes on me!')
  }

  handleFocus =() => {
    console.log('Good!')
  }
}
