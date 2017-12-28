// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{

  myFocus = () => {
    console.log("Good!")
  }

  myBlur = () => {
    console.log("Hey! Eyes on me!")
  }

  render(){
    return(
      <button onFocus={this.myFocus} onBlur={this.myBlur}>Eyes on Me!</button>
    )
  }
}

export default EyesOnMe