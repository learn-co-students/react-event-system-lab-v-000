// Code EyesOnMe Component Here
import React from 'react'

class EyesonMe extends React.Component{
  focus = () => console.log("Good!")
  blur = () => console.log("Hey! Eyes on me!")
  render(){
    return(
      <button onFocus={this.focus} onBlur={this.blur}/>
    )
  }
}

export default EyesonMe
