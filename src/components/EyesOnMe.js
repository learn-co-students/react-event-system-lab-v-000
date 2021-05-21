import React from 'react'

class EyesOnMe extends React.Component{

  focusHandler = (event) => console.log("Good!")

  blurHandler = (event) => console.log("Hey! Eyes on me!")

  render(){
    return(
        <button onFocus={this.focusHandler}  onBlur={this.blurHandler} ></button>
    )
  }
}

export default EyesOnMe
