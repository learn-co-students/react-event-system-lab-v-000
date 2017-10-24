// Code EyesOnMe Component Here
import React from 'react'


export default class EyesOnMe extends React.Component{


  focused = ()=>{console.log("Good!")}
  blurred = ()=>{console.log("Hey! Eyes on me!")}
  pasted = ()=>{console.log("you pasted something!")}

  render(){
    return(
      <button onFocus={this.focused} onPaste={this.pasted} onBlur={this.blurred}type="button">Click Me!</button>
    )
  }
}
