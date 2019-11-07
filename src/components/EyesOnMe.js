// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  
  constructor(props){
    super(props)
    
    this.state = {
      
    }
  }
  
  focusHandler = () => {
    console.log('Good!');
  }
  
  blurHandler = () =>{
    console.log('Hey! Eyes on me!');
  }
  
  render(){
    return (
      <button onFocus={this.focusHandler} onBlur={this.blurHandler} />
      )
  }
}