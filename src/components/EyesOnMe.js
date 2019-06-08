import React from 'react'

class EyesOnMe extends React.Component {
  printGood = () => {
    console.log("Good!")
  }

  printHey = () => {
    console.log("Hey! Eyes on me!")
  }


  render(){
    return(
      <button onFocus={this.printGood} onBlur={this.printHey}></button>
    )
  }
}

export default EyesOnMe
