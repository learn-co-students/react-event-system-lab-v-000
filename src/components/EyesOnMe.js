// Code EyesOnMe Component
import React from 'react'

export default class EyesOnMe extends React.Component{
  render(){
    return (<button onFocus={this.focusGained} onBlur={this.focusLost}></button>)
  }

  focusGained(){
    console.log('Good!');
  }

  focusLost(){
    console.log('Hey! Eyes on me!');
  }
}
