import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  onFocusHandler = () =>{
    console.log('Good!')
  }

  onBlurHandler = () =>{
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(
     <div>
       <button onFocus={this.onFocusHandler} onBlur={this.onBlurHandler}></button>
     </div>
    )
  }
  
}